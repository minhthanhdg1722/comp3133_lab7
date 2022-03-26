import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { GreetPipe } from './greet.pipe';
import { FullnamePipe } from './fullname.pipe';
import { PowerPipe } from './power.pipe';
import { SquarePipe } from './square.pipe';
import { HerosComponent } from './heros/heros.component';
import { CustomDirective } from './custom.directive';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { InputFormatDirective } from './input-format.directive';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    GreetPipe,
    FullnamePipe,
    PowerPipe,
    SquarePipe,
    HerosComponent,
    CustomDirective,
    RemoveSpacesPipe,
    InputFormatDirective,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
