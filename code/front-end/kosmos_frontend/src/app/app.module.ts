import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InterceptorModule } from './shared/interceptor.module';

@NgModule({
  declarations: [
  ],
  imports: [
    InterceptorModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  providers: [
  ],
  bootstrap: []
})
export class AppModule {}

