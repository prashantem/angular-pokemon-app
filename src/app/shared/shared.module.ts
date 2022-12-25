import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {HttpConfigService} from './services/http-config.service';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  providers:[HttpConfigService],
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
