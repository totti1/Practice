import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FormComponent } from './form/form.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, FormComponent, HomeDetailsComponent, DateCountPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}