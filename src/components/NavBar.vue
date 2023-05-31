<script>
import { router } from '../router.js';

export default{
    name: "NavBar",
}
</script>


<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Boolfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{name:'Home'}" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'Contact'}" class="nav-link">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'Project'}" class="nav-link">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'About'}" class="nav-link">Home</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>