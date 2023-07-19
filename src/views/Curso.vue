<template>
    <div class="container">
      <div class="card">
        <img :src="curso.img" class="card-img-top" alt="Imagen del curso">
        <div class="card-body">
          <h5 class="card-title">{{ curso.nombre }}</h5>
          <p class="card-text">Costo: {{ curso.costo }}</p>
          <p class="card-text">Duración: {{ curso.duracion }}</p>
          <p class="card-text">Cupos: {{ curso.cupos }}</p>
          <p class="card-text">Inscritos: {{ curso.inscritos }}</p>
          <p class="card-text">Completado: {{ curso.completado ? 'Sí' : 'No' }}</p>
          <p class="card-text">Fecha de Registro: {{ curso.fecha_registro }}</p>
          <p class="card-text">{{ curso.descripcion }}</p>
          <button class="btn btn-primary" @click="inscribirse" :disabled="curso.inscritos >= curso.cupos || inscripcionExitosa">Inscribirse</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'mi-curso',
    props: ['id'],
    data() {
  return {
    inscripcionExitosa: false
  };
},

    computed: {
      curso() {
        return this.$store.getters.getCursoById(this.id);
      }
    },
    methods: {
      inscribirse() {
    if (this.curso.inscritos < this.curso.cupos) {

      

      this.curso.inscritos++;
  
    
      this.inscripcionExitosa = true;
    } else {
     
    }
  }
}
  };
  </script>
  
  <style>
  .card {
    margin-top: 20px;
  }
  </style>
  
