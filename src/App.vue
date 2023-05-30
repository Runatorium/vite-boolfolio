<script>
import ProjectCard from './components/ProjectCard.vue'
import AppMain from './components/AppMain.vue';

export default{
  components:{
    ProjectCard,
    AppMain
  }
}
</script>

<template>
<ProjectCard></ProjectCard>
<AppMain></AppMain>
</template>

<style lang="scss">
@use './styles/general.sass'

</style>
