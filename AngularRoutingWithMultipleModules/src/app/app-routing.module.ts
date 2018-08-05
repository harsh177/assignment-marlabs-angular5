import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { ConnectionDetailsComponent } from './connection/connection-details/connection-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
  path:'home',
  component:HomeComponent,
  children:[{
    path:'',
    component:HeaderComponent,
    outlet:'header'
  },
  {
    path:'',
    component:SidebarLeftComponent,
    outlet:'sidebar-left'
  },{
    path:'',
    component:MainComponent,
    outlet:'main'
  },{
    path:'connection',
    component:ConnectionDetailsComponent,
    outlet:'main'
  },{
    path:'',
    component:FooterComponent,
    outlet:'footer'
  }]
},
{ path: '**',   redirectTo:'/home' }
];
//{ path: '**',  component:PageNotFound }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//url for above route, if all childern have path named as ch 
//http://localhost:4200/home/(header:ch//sidebar-left:ch//footer:ch//main:ch)
//http://localhost:4200/home/(header:ch/test//sidebar-left:ch//footer:ch//main:ch)
/*{
  path:'head',
  component:HeaderComponent,
  outlet:'header',
  children:[{
    path:"test",
    component:TestComponent
  }]
}*/
//for above=> http://localhost:4200/home/(header:head/test) or http://localhost:4200/home/(header:head)

//for current
//http://localhost:4200/home/(main:connection) or http://localhost:4200/home
