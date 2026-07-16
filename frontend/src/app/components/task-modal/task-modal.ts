import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task';

@Component({
    selector: 'app-task-modal',
    imports: [FormsModule],
    templateUrl: './task-modal.html',
    styleUrl: './task-modal.scss',
})
export class TaskModal {
    @Input() isOpen = false;
    @Output() close = new EventEmitter<void>();
    @Output() save = new EventEmitter<Task>();

    newTask: Partial<Task> = {
        title: '',
        description: '',
        category: '',
        status: 'pendente'
    }

    @Input() set taskToEdit(task: Task | null) {
        if (task) {
            this.newTask = { ...task };
        } else {
            this.newTask = { title: '', description: '', category: '', status: 'pendente' };
        }
    }

    fecharModal() {
        this.close.emit();
    }

    salvarTarefa() {
        if (this.newTask.title && this.newTask.category) {
            this.save.emit(this.newTask as Task);

            this.newTask = { title: '', description: '', category: '', status: 'pendente' }
        }
    }
}
