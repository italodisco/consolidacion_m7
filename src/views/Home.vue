<template>
  <div class="container">
    <h1 class="text-center">Lista de Cursos Disponibles</h1>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="curso in cursos" :key="curso.id">
        <div class="box">
          <div class="card">
            <img :src="curso.img" class="card-img-top" alt="Imagen del curso">
            <div class="card-body">
              <h5 class="card-title text-center">{{ curso.nombre }}</h5>
              <p class="card-text"><b>Costo:</b> {{ curso.costo }}</p>
              <p class="card-text"><b>Duración:</b> {{ curso.duracion }}</p>
              <p class="card-text"><b>Cupos:</b> {{ curso.cupos }}</p>
              <p class="card-text"><b>Inscritos:</b> {{ curso.inscritos }}</p>
              <p class="card-text"><b>Completado:</b> {{ curso.completado ? 'Sí' : 'No' }}</p>
              <p class="card-text"><b>Fecha de Registro:</b> {{ curso.fecha_registro }}</p>
              <p class="card-text">{{ curso.descripcion }}</p>
              <router-link :to="`/cursos/${curso.id}`" class="btn btn-primary">Ver Detalles</router-link>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: 'home-view',
    data() {
      return {
        cursos: [
          { id: 1, img: 'https://i.blogs.es/545cf8/es6-logo/450_1000.png', nombre: 'JavaScript Avanzado', costo: 30000, duracion: '2 meses', cupos: 20, inscritos: 10, completado: false, fecha_registro: '06/03/2022', descripcion: 'Curso con las nuevas actualizaciones de JavaScript.' },
          { id: 2, img: 'https://lineadecodigo.com/wp-content/uploads/2014/04/css.png', nombre: 'CSS para principiantes', costo: 10000, duracion: '1 mes', cupos: 35, inscritos: 23, completado: false, fecha_registro: '05/03/2022', descripcion: 'Aprendiendo estilos con CSS desde el nivel más básico.' },
          { id: 3, img: 'https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.jpg', nombre: 'JavaScript Básico de 0 a 100', costo: 20000, duracion: '2 meses', cupos: 25, inscritos: 0, completado: true, fecha_registro: '05/03/2022', descripcion: 'Programando para la web con JavaScript.' },
          { id: 4, img: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', nombre: 'HTML Básico', costo: 10000, duracion: '1 mes', cupos: 35, inscritos: 0, completado: true, fecha_registro: '31/01/2022', descripcion: 'Aprende HTML 5 y crea tus primeras páginas web paso a paso con decenas de ejercicios.' },
          { id: 5, img: 'https://logosandtypes.com/wp-content/uploads/2020/08/vue.svg', nombre: 'Vue JS de 0 a 100', costo: 85500, duracion: '5 meses', cupos: 35, inscritos: 35, completado: false, fecha_registro: '06/03/2022', descripcion: 'Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework.' },
          { id: 6, img: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png', nombre: 'Estilos con SASS', costo: 45000, duracion: '1 mes', cupos: 40, inscritos: 35, completado: false, fecha_registro: '06/03/2022', descripcion: 'Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias.' }
        ]
      };
    }
  };
  </script>
  
  <style>
  .box {
    margin-bottom: 10px;
    padding: 5px;
    background-color: #000;
  }
  
  .card {
    background-color: #fff;
    height: 100%;
  }
  
  .card-img-top {
    height: 150px;
    object-fit: cover;
  }
  
  .card-title {
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .card-text {
    text-align: center;
  }
  
  .btn-primary {
    display: block;
    margin: 0 auto;
  }
  </style>
  