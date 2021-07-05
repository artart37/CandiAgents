import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule, mainroute } from './main-routing.module';
import { MagicchipsComponent } from '../../shared/components/magicchips/magicchips.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HowitworksComponent } from '../../shared/components/howitworks/howitworks.component';
import { ObjectfilterPipe } from '../../shared//components/magicchips/pipes/objectfilter.pipe';
import { CheckleftrightvpDirective } from '../../shared//directives/checkleftrightvp.directive';


@NgModule({
  declarations: [
    mainroute,
    MagicchipsComponent,
    ButtonComponent,
    HowitworksComponent,
    ObjectfilterPipe,
    CheckleftrightvpDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  exports:[
    mainroute,
    MagicchipsComponent,
    ButtonComponent,
    HowitworksComponent,
    ObjectfilterPipe,
    CheckleftrightvpDirective
  ]
})
export class MainModule { }
