import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, FieldsetModule, PanelModule],
  exports: [],
})
export class AboutModule {}
