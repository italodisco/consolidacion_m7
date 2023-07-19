// store/cursos.js

import cursosData from '@/data/cursos.js';

const state = {
  cursos: []
};

const getters = {
  getCursos: (state) => state.cursos,
  getCursoById: (state) => (id) => state.cursos.find((curso) => curso.id === id)
};

const actions = {
  fetchCursos({ commit }) {
    // Simulamos una llamada a la API para obtener los cursos
    setTimeout(() => {
      commit('setCursos', cursosData);
    }, 500);
  }
};

const mutations = {
  setCursos: (state, cursos) => (state.cursos = cursos)
};

export default {
  state,
  getters,
  actions,
  mutations
};
