import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

// 1º Singleton, cria uma instância desse serviço e disponibiliza para a aplicação inteira
@Injectable({
    providedIn: 'root',
})
export class TaskService {
    // 2º Define a conexão com API REST
    private apiUrl = environment.apiUrl;

    // 3º Injeta o HttpClient para requisições
    constructor(private http: HttpClient) {}

    // Método HTTP GET
    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl);
    }

    // Método HTTP DELETE
    deleteTask(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}${id}/`)
    }

    // Método HTTP POST
    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task);
    }

    // Método HTTP PUT/PATCH
    updateTask(id: number, task: Partial<Task>): Observable<Task> {
        return this.http.put<Task>(`${this.apiUrl}${id}/`, task);
    }
}
