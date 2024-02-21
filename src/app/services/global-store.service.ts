import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalStore } from '../interfaces/global-store';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  private state = new BehaviorSubject<GlobalStore>({
    totalTasks: 0,
    openedTasks: 0,
    inProgress: 0,
    canceledTasks: 0,
    completedTasks: 0,
    test: '',
  });

  watch() {
    return this.state.asObservable();
  }

  update(data: Partial<GlobalStore>) {
    this.state.next({ ...this.state.getValue(), ...data });
  }
}
