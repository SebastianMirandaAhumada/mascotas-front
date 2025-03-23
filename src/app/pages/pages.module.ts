import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { CitasComponent } from './citas/citas.component';
import { AgendaConsultasComponent } from './agenda-consultas/agenda-consultas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';
import { FacturacionPagosComponent } from './facturacion-pagos/facturacion-pagos.component';
import { ComunicacionClienteComponent } from './comunicacion-cliente/comunicacion-cliente.component';
import { LabExternosComponent } from './lab-externos/lab-externos.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { InventarioComponent } from './inventario/inventario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgendaConsultasComponent,
    ClientesComponent,
    CitasComponent,
    ComunicacionClienteComponent,
    EmpleadoComponent,
    FacturacionPagosComponent,
    HomeComponent,
    HistorialClinicoComponent,    
    LabExternosComponent,
    MascotasComponent,
    InventarioComponent,
  ],
  imports: [PagesRoutingModule, CommonModule,    ReactiveFormsModule],
})
export class PagesModule {}
