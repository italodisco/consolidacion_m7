<template>
  <v-container>
    <h1 class="text-center">Panel de Administración</h1>
    <v-data-table
      :headers="headers"
      :items="cursos"
      item-key="id"
    >
 
      <template v-slot:[`item.costo`]="{ item }">
        {{ item.costo }}
      </template>
      <template v-slot:[`item.completado`]="{ item }">
        {{ item.completado ? 'Sí' : 'No' }}
      </template>
      <template v-slot:[`item.fecha_registro`]="{ item }">
        {{ item.fecha_registro }}
      </template>
      <template v-slot:item="{ item }">
        <td>{{ item.id }}</td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.duracion }}</td>
        <td>{{ item.cupos }}</td>
        <td>{{ item.inscritos }}</td>
        <td>{{ item.descripcion }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'mi-admin',
  computed: {
    cursos() {
      return this.$store.getters.getCursos;
    },
    headers() {
      return [
        { text: 'ID', value: 'id' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Duración', value: 'duracion' },
        { text: 'Cupos', value: 'cupos' },
        { text: 'Inscritos', value: 'inscritos' },
        { text: 'Descripción', value: 'descripcion' }
      ];
    }
  }
};
</script>

<style>
/* Estilos personalizados si es necesario */
</style>
