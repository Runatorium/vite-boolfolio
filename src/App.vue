<script>

import ProjectCard from './components/ProjectCard.vue';
import ProjectList from './pages/ProjectList.vue';

export default{
    components: { ProjectCard, ProjectList }
}
</script>

<template>
  <ProjectList></ProjectList>
</template>

<style lang="scss">
@use './styles/general.sass'

</style>
