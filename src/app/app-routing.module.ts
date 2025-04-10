import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './Pages/update/update.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
//import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [

  { 
    path: '',
    component: HomePageComponent, 
  },

  { 
    path: 'update/:id', 
    component: UpdateComponent,
    pathMatch: 'full' 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { UpdateComponent } from './update/update.component';

// const routes: Routes = [
//   { path: '/app', component: UpdateComponent }

// ];

// @NgModule({

//   declarations: [
//     UpdateComponent,
//   ],


//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
