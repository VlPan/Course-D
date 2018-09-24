import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductManagerPage } from './pages';
import { FormsModule } from '@angular/forms';

// import { reducers, effects } from './store';

import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  declarations: [
    ProductManagerPage,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule,
    // StoreModule.forFeature('products', reducers),
    // EffectsModule.forFeature(effects),
  ],
  providers: [],
  exports: [ProductManagerPage],
  bootstrap: [ProductManagerPage]
})
export class ProductManagerModule {}
