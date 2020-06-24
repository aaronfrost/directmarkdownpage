import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'foo',
    loadChildren: () => import('./foo/foo.module').then((m) => m.FooModule),
  },
  {
    path: 'bar',
    loadChildren: () => import('./bar/bar.module').then((m) => m.BarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
