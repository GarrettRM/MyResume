
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/primeng';    
import {MenuItem} from 'primeng/primeng';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkhistoryComponent } from './workhistory/workhistory.component';
import { ExtraComponent } from './extra/extra.component';
import { SkillsComponent } from './skills/skills.component';
import { EmailComponent } from './email/email.component';

const appRoutes: Routes = [

{
path:'',
component:MainComponent
},
{
path:'WorkHistory',
component:WorkhistoryComponent
},
{
path:'Skills',
component:SkillsComponent
},
{
path:'Contact',
component:EmailComponent
}
]



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    WorkhistoryComponent,
    ExtraComponent,
    SkillsComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
