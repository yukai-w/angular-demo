import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeroesComponent } from './heroes/heroes.component';

// 路由配置
const routes: Routes = [
  {
    path: '', component: TodoListComponent,
  },
  {
    path: 'hero', component: HeroesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
