import { Component } from '@angular/core';
import { GlobalStoreService } from './services/global-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task-manager-app';
  totalTasks: number;
  openedTasks: number;
  inProgress: number;
  canceledTasks: number;
  completedTasks: number;

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
    });

    return this;
  }
}
