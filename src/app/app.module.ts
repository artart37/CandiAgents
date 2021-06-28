import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MagicchipsComponent } from './shared/components/magicchips/magicchips.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ObjectfilterPipe } from './shared/components/magicchips/pipes/objectfilter.pipe';
import { HowitworksComponent } from './shared/components/howitworks/howitworks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MagicchipsComponent,
    ButtonComponent,
    ObjectfilterPipe,
    HowitworksComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
