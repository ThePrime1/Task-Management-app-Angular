import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task as TaskInterface } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  /**
   * Get all tasks
   *
   * @returns Observable<TaskInterface[]>
   */
  getTasks(): Observable<TaskInterface[]> {
    const url = `${this.baseUrl}/tasks`;
    return this.httpClient.get<TaskInterface[]>(url);
  }

  /**
   * Get a single task
   *
   * @param id
   * @returns Observable<TaskInterface>
   */
  getTask(id: string): Observable<TaskInterface> {
    const url = `${this.baseUrl}/tasks/${id}`;
    return this.httpClient.get<TaskInterface>(url);
  }

  /**
   * Creates new task
   * @param payload
   * @returns Observable<TaskInterface>
   */
  createTask(payload: TaskInterface): Observable<TaskInterface> {
    const url = `${this.baseUrl}/tasks`;
    return this.httpClient.post<TaskInterface>(url, payload);
  }

  /**
   * Deletes a task
   * @param id
   * @returns Observable<TaskInterface>
   */
  delete(id: string): Observable<TaskInterface> {
    const url = `${this.baseUrl}/tasks/${id}`;
    return this.httpClient.delete<TaskInterface>(url);
  }

  /**
   *
   * @param id
   * @param payload
   * @returns Observable<TaskInterface>
   */
  update(id: string, payload: TaskInterface): Observable<TaskInterface> {
    const url = `${this.baseUrl}/tasks/${id}`;
    return this.httpClient.put<TaskInterface>(url, payload);
  }
}
