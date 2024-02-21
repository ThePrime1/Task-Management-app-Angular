import { Component, EventEmitter, Output } from '@angular/core';
import { Task as TaskInterface } from '../interfaces/task';
import { TaskService } from '../services/task.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalStoreService } from '../services/global-store.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [MessageService],
})
export class TasksComponent {
  tasks: TaskInterface[] = [];
  selectedTask: any;

  visible: boolean = false;
  isEditable: boolean;
  numberOfTasks: number = 0;
  totalTasks: number;
  currentTaskId: string;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private globalStoreService: GlobalStoreService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getAllTasks();
  }

  showDialog() {
    this.visible = true;
    this.isEditable = false;
  }
  closeForm(value: boolean) {
    console.log(value);
    this.visible = value;
  }

  getAllTasks() {
    firstValueFrom(this.taskService.getTasks()).then((r) => {
      this.tasks = [...r];

      this.updateTotalTasksCount();
    });
  }

  updateTotalTasksCount() {
    const totalTasks = this.tasks.length;

    const openedTasks = this.tasks.filter((task) => {
      return task.status === 'open';
    }).length;

    const inProgress = this.tasks.filter((task) => {
      return task.status === 'in progress';
    }).length;

    const canceledTasks = this.tasks.filter((task) => {
      return task.status === 'canceled';
    }).length;

    const completedTasks = this.tasks.filter((task) => {
      return task.status === 'completed';
    }).length;

    this.globalStoreService.update({
      totalTasks,
      openedTasks,
      inProgress,
      canceledTasks,
      completedTasks,
    });
  }

  getTask(id: string) {
    this.router.navigate([`tasks/${id}`]);
  }

  createTask(value: TaskInterface) {
    if (!this.isEditable) {
      firstValueFrom(this.taskService.createTask(value)).then((r) => {
        this.getAllTasks();

        let message = 'Task Created';
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: message,
        });
      });
    } else {
      firstValueFrom(this.taskService.update(this.currentTaskId, value)).then(
        (r) => {
          this.getAllTasks();
        }
      );
    }
  }

  deleteTask(id: string) {
    firstValueFrom(this.taskService.delete(id)).then((r) => {
      this.getAllTasks();
    });
  }

  updateTask(id: string) {
    this.visible = true;
    this.isEditable = true;

    if (this.tasks) {
      this.selectedTask = this.tasks.find((task) => {
        this.currentTaskId = task.id;
        return task.id === id;
      });
    }
  }
}
