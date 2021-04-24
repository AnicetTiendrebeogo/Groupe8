import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Group8PageRoutingModule } from './group8-routing.module';

import { Group8Page } from './group8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Group8PageRoutingModule
  ],
  declarations: [Group8Page]
})
export class Group8PageModule {}
