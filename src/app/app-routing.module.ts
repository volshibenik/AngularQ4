import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AddCourseComponent } from './add-course/add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course/edit-course.component';
import { LoginComponent } from './admin/login/login.component';
import { CanActivateGuard } from './guards/can-activate.guard';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesListComponent, canActivate: [CanActivateGuard], },
  { path: 'courses/add', component: AddCourseComponent, canActivate: [CanActivateGuard] },
  { path: 'courses/:id', component: EditCourseComponent, canActivate: [CanActivateGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
