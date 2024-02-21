import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Task as TaskInterface } from '../interfaces/task';
import { Observable, firstValueFrom } from 'rxjs';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  providers: [MessageService],
})
export class TaskFormComponent implements OnChanges {
  formGroup: FormGroup;

  /**
   * Sending this to close the form
   */
  @Output() closeForm = new EventEmitter<boolean>();
  @Output() formData = new EventEmitter<TaskInterface>();
  @Input() isEditable: boolean;
  @Input() task: TaskInterface;
  editedData: TaskInterface;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private taskService: TaskService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['task'].isFirstChange()) {
      this.populateForm(this.task);
    }
  }

  ngOnInit() {
    /**
     * Form builder
     */
    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      assignedTo: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
    });

    /**
     * Reset form
     */
    this.resetForm();
  }

  /**
   * Reset form
   */
  resetForm() {
    this.formGroup.setValue({
      id: `${+new Date()}`,
      title: '',
      description: '',
      startDate: '',
      assignedTo: '',
      status: '',
      priority: '',
    });
  }

  onFormSubmited() {
    if (!this.formGroup.valid) {
      let message = 'Invalid Form';
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: message,
      });
    } else {
      this.formData.emit(this.formGroup.value);
      console.log(this.formGroup.value);
      this.resetForm();
      this.closeForm.emit(false);
    }
  }

  populateForm(task: TaskInterface) {
    if (!task) {
      return;
    }

    this.formGroup.patchValue({
      title: task.title,
      description: task.description,
      startDate: task.startDate,
      assignedTo: task.assignedTo,
      status: task.status,
      priority: task.priority,
    });
  }
}
