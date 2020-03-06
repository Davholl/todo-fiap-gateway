import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TodofiapgatewaySharedModule } from 'app/shared/shared.module';
import { TodofiapgatewayCoreModule } from 'app/core/core.module';
import { TodofiapgatewayAppRoutingModule } from './app-routing.module';
import { TodofiapgatewayHomeModule } from './home/home.module';
import { TodofiapgatewayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TodofiapgatewaySharedModule,
    TodofiapgatewayCoreModule,
    TodofiapgatewayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TodofiapgatewayEntityModule,
    TodofiapgatewayAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class TodofiapgatewayAppModule {}
