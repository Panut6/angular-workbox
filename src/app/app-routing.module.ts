import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelayComponent } from './delay/delay.component';

const routes: Routes = [
  {
    path: '',
    component: DelayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
