import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task';
import { DatePipe, NgClass } from "@angular/common";

@Component({
    selector: 'app-task-item',
    imports: [NgClass, DatePipe],
    templateUrl: './task-item.html',
    styleUrl: './task-item.scss',
})
export class TaskItem {
    // Define o @Input para receber os dados do componente pai
    // informando ao Angular que os dados virão de fora do componente
    @Input({ required: true }) task!: Task;
    @Output() delete = new EventEmitter<number>();
    @Output() edit = new EventEmitter<Task>();

    onEdit() {
        this.edit.emit(this.task);
    }

    onDelete() {
        if (this.task.id) {
            this.delete.emit(this.task.id);
        }
    }

    protected recalcularAltura(textarea: HTMLTextAreaElement) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }
}
