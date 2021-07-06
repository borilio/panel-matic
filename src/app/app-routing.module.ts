import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaAtrasComponent } from './components/cuenta-atras/cuenta-atras.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: "timer", component: CuentaAtrasComponent},
  { path: "timer/:time", component: CuentaAtrasComponent},
  { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
