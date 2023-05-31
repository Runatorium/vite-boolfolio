<script>

import ProjectList from './pages/ProjectList.vue';
import NavBar from './components/NavBar.vue';

export default{
    components: { ProjectList, NavBar }
}
</script>


<template>
  <header>
      <NavBar></NavBar>
  </header>
  <RouterView></RouterView>
</template>

<style lang="scss">
@use './styles/general.sass';

</style>
