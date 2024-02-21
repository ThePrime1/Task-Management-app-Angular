import { Component } from '@angular/core';
import { GlobalStoreService } from '../services/global-store.service';

@Component({
  selector: 'app-task-counter',
  templateUrl: './task-counter.component.html',
  styleUrls: ['./task-counter.component.scss'],
})
export class TaskCounterComponent {
  title = 'task-manager-app';
  totalTasks: number;
  openedTasks: number;
  inProgress: number;
  canceledTasks: number;
  completedTasks: number;
  something: string;

  constructor(private globalStoreService: GlobalStoreService) {}

  ngOnInit() {
    this.watchGlobalStore();
  }

  watchGlobalStore() {
    this.globalStoreService.watch().subscribe((state) => {
      this.totalTasks = state.totalTasks;
      this.openedTasks = state.openedTasks;
      this.inProgress = state.inProgress;
      this.canceledTasks = state.canceledTasks;
      this.completedTasks = state.completedTasks;

      this.something = state.test;
    });

    return this;
  }
}
