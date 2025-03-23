import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { LabExternosComponent } from './lab-externos/lab-externos.component';
import { AgendaConsultasComponent } from './agenda-consultas/agenda-consultas.component';
import { CitasComponent } from './citas/citas.component';
import { ComunicacionClienteComponent } from './comunicacion-cliente/comunicacion-cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FacturacionPagosComponent } from './facturacion-pagos/facturacion-pagos.component';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario/inventario.component';
import { ClientesComponent } from './clientes/clientes.component';


const routes: Routes = [
  {
    path: '',    
    component:HomeComponent,
    children: [
      {
        path: 'mascotas',
        component: MascotasComponent
      },
      {
        path: 'labs',
        component: LabExternosComponent
      },
      {
        path: 'agendas-consultar',
        component: AgendaConsultasComponent
      },
      {
        path: 'citas',
        component: CitasComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'empleados',
        component: EmpleadoComponent
      },
      {
        path: 'facturas',
        component: FacturacionPagosComponent
      },
      {
        path: 'historial',
        component: HistorialClinicoComponent
      },
      {
        path: 'labs',
        component: LabExternosComponent
      },
      {
        path: 'inventario',
        component: InventarioComponent
      },
     
      {
        path: '**', 
        redirectTo:'mascotas',
        pathMatch: 'full'
      },     
      {
        path: '', 
        redirectTo:'mascotas',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
