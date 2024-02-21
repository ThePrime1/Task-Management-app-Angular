import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCounterComponent } from './task-counter.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [TaskCounterComponent],
  imports: [CommonModule, CardModule],
  exports: [TaskCounterComponent],
})
export class TaskCounterModule {}
