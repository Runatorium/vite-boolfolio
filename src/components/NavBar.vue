<script>
import { router } from '../router.js';

export default{
    name: "NavBar",

    data(){
        return{
            menuItems:[
                {
                    label: 'Home',
                    routeName: 'Home'
                },
                {
                    label: 'Contact',
                    routeName: 'Contact'
                },
                {
                    label: 'About',
                    routeName: 'About'
                },
                {
                    label: 'Projects',
                    routeName: 'Project'
                },
            ]
        }
    }
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
        <li class="nav-item" v-for="item in menuItems">
          <router-link :to="{name:item.routeName}" class="nav-link">{{ item.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>