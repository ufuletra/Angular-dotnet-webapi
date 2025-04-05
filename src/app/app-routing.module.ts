import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './Pages/update/update.component';
//import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [

  { 
    path: '',
    loadChildren: () =>
        import('./app.module').then((x) => x.AppModule), 
  },

  { 
    path: 'update', 
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
