<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-purple">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <i class="bi bi-house-door-fill"></i> Home
        </router-link>
        <div class="navbar-nav ml-auto">
          <router-link to="/admin" class="nav-link">
            <i class="bi bi-gear-fill"></i> Administración
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <style>
  .navbar {
    background-color: #8A2BE2; /* Color lila */
  }
  
  .navbar-brand {
    color: #fff;
    font-weight: bold;
  }
  
  .navbar-nav .nav-link {
    color: #fff;
  }
  </style>
  