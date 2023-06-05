import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//angular materials
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './componentes/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

//Componentes proprios
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarVendaComponent } from './componentes/iniciar-venda/iniciar-venda.component';
import { ClienteService } from './services/cliente/cliente.service';

@NgModule({
  declarations: [			
    AppComponent,
      MenuComponent,
      PaginaInicialComponent,
      SobreComponent,
      FooterComponent,
      IniciarVendaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
