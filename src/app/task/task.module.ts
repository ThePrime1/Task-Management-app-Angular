import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, CardModule],
})
export class TaskModule {}
