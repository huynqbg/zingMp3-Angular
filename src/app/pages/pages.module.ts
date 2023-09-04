import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ExploreComponent } from './explore/explore.component';
import { ZingchartComponent } from './zingchart/zingchart.component';
import { RadioComponent } from './radio/radio.component';
import { LibraryComponent } from './library/library.component';
import { AllComponent } from './explore/all/all.component';
import { VietnamComponent } from './explore/vietnam/vietnam.component';

const routes: Routes = [
  { path: '', 
    component: ExploreComponent,
    children: [
      { path: '', component: AllComponent },
      { path: 'explore/vietnam', component: VietnamComponent }
    ]
  },
  { path: 'zing-chart', component: ZingchartComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'mymusic', component: LibraryComponent },
];

@NgModule({
  declarations: [
    ExploreComponent,
    ZingchartComponent,
    RadioComponent,
    LibraryComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PagesModule { }
