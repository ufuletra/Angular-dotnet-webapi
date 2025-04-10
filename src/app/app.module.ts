import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { EMPServiceService } from './Services/empservice.service';
import { UpdateComponent } from './Pages/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    

  ],
  providers: [
    EMPServiceService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
