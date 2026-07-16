import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';
import { TaskItem } from '../task-item/task-item';
import { ActivatedRoute } from '@angular/router';
import { TaskModal } from "../task-modal/task-modal";

@Component({
    selector: 'app-task-list',
    imports: [TaskItem, TaskModal],
    templateUrl: './task-list.html',
    styleUrl: './task-list.scss',
})
export class TaskList implements OnInit { // 4º importar e implementar OnInit
    // 5º Criar uma variável para armazenar os dados recebidos do Service.
    tasks: Task[] = [];
    private allTasks: Task[] = [];

    private currentPath: string = "";

    // 6º Injeta o TaskService via construtor.
    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef
    ) {}

    isModalOpen = false;

    taskEmEdicao: Task | null = null;

    abrirModal(task?: Task) {
        this.taskEmEdicao = task || null;
        this.isModalOpen = true;
    }

    fecharModal() {
        this.isModalOpen = false;
        this.taskEmEdicao = null;
    }

    // 7º Consome o serviço na inicialização do componente
    // Obs: Importar o OnInit do @angular/core
    ngOnInit() {
        this.route.url.subscribe(urlSegment => {
            this.currentPath = urlSegment.length > 0 ? urlSegment[0].path : "";

            this.taskService.getTasks().subscribe(dadosDoBanco => {
                this.allTasks = dadosDoBanco;
                this.filtrarTarefas(this.currentPath);

                // Força detecção imediata de mudanças no componente pai e nos seus filhos.
                this.cdr.detectChanges();
            });
        });
    }

    private filtrarTarefas(path: string) {
        if (path === "") {
            this.tasks = this.allTasks;
        } else if (path === "pendentes") {
            this.tasks = this.allTasks.filter(task => task.status === "pendente");
        } else if (path === "em-andamento") {
            this.tasks = this.allTasks.filter(task => task.status === "em andamento");
        } else if (path === "concluidas") {
            this.tasks = this.allTasks.filter(task => task.status === "concluída");
        }
    }

    removerTarefa(id: number) {
        this.taskService.deleteTask(id).subscribe(() => {
            // Remove a tarefa da lista na memória e atualiza a interface.
            this.allTasks = this.allTasks.filter(t => t.id !== id);
            this.filtrarTarefas(this.currentPath);
            this.cdr.detectChanges();
        });
    }

    salvarTarefaModal(tarefaForm: Task) {
        if (tarefaForm.id) {
            // Edição (PUT)
            this.taskService.updateTask(tarefaForm.id, tarefaForm).subscribe(tarefaAtualizada => {
                const index = this.allTasks.findIndex(t => t.id === tarefaForm.id);
                if (index !== -1) {
                    this.allTasks[index] = tarefaAtualizada;
                }
                this.filtrarTarefas(this.currentPath);
                this.fecharModal();
                this.cdr.detectChanges();
            });
        } else {
            // Criação (POST)
            this.taskService.addTask(tarefaForm).subscribe(tarefaSalva => {
                this.allTasks.push(tarefaSalva);
                this.filtrarTarefas(this.currentPath);
                this.fecharModal();
                this.cdr.detectChanges();
            });
        }
    }
}
