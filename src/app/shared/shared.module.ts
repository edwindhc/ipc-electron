import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { AlertComponent } from './components/alert/alert.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatMenuModule} from '@angular/material/menu';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule, MatGridListModule,
} from '@angular/material';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, AlertComponent, NavbarComponent],
  imports: [CommonModule, TranslateModule, MatMenuModule, MatToolbarModule, MatIconModule, MatGridListModule],
  exports: [TranslateModule, WebviewDirective,NavbarComponent]
})
export class SharedModule {}
