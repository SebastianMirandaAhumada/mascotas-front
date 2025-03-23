import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-lab-externos',
  templateUrl: './lab-externos.component.html',
  styleUrl: './lab-externos.component.scss'
})

export class LabExternosComponent implements OnInit {
  mascotas = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'perez',
      especie: 'Perro',                
      fecha: '15-05-2025',
      rutDuenio: '1-9',
    },
    {
      id: 2,
      nombre: 'Antonio',
      apellido: 'perez',
      especie: 'Gato',                
      fecha: '15-05-2025',
      rutDuenio: '1-9',
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellido: 'perez',
      especie: 'Perro',                
      fecha: '15-05-2025',
      rutDuenio: '1-9',
    },
  ];
  mascotaForm: FormGroup;
  mascotaSeleccionada: any = null;
  constructor(private fb: FormBuilder) {
    this.mascotaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      peso: ['', [Validators.required, Validators.min(1)]],
      rutDuenio: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  eliminarMascota(id: number) {
    if (confirm(`¿Seguro que deseas eliminar la mascota con ID: ${id}?`)) {
      this.mascotas = this.mascotas.filter((mascota) => mascota.id !== id);
    }
  }

  editarMascota(id: number) {
    this.mascotaSeleccionada = this.mascotas.find(
      (mascota) => mascota.id === id
    );
    if (this.mascotaSeleccionada) {
      this.mascotaForm.setValue({
        id: this.mascotaSeleccionada.id,
        nombre: this.mascotaSeleccionada.nombre,
        raza: this.mascotaSeleccionada.raza,
        peso: this.mascotaSeleccionada.peso,
        rutDuenio: this.mascotaSeleccionada.rutDuenio,
      });
    }
  }
  agregarCambios() {}
  guardarCambios() {
    if (this.mascotaForm.valid) {
      const index = this.mascotas.findIndex(
        (m) => m.id === this.mascotaForm.value.id
      );
      if (index !== -1) {
        this.mascotas[index] = { ...this.mascotaForm.value };
      }
    }
  }
}
