import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { TaskModule } from './task/task.module';
import { TasksModule } from './tasks/tasks.module';
import { TaskFormModule } from './task-form/task-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TaskModule,
    TasksModule,
    TaskFormModule,
    ReactiveFormsModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
