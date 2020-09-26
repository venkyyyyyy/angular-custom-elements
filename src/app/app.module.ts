import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ConsumerLoginComponent } from './consumer-login/consumer-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    ConsumerLoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  entryComponents: [ConsumerLoginComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const loginComponentElm = createCustomElement(ConsumerLoginComponent, {injector: injector});
    customElements.define('app-consumer-login', loginComponentElm);
  }
  ngDoBootstrap() {

  }
}
