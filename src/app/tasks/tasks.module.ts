import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { TaskFormModule } from '../task-form/task-form.module';
import { TaskCounterModule } from '../task-counter/task-counter.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    TaskFormModule,
    TaskCounterModule,
    ToastModule,
  ],
  exports: [TasksComponent],
})
export class TasksModule {}
