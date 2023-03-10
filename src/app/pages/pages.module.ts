import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from '../primeng/primeng.module';

import { HomeComponent } from '../pages/home/home.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { PlayersComponent } from '../pages/players/players.component';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    PlayersComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PrimengModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    NotFoundComponent,
    PlayersComponent,
    HeaderComponent,
  ]
})
export class PagesModule { }
