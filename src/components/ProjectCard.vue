<script>
import AppMain from './AppMain.vue';


 export default{
    name: "ProjectCard",

    props: {
    singleCard: Object
    }
    
    
        
}
</script>


<template>
<div class="card" >
    <div class="card-body">
      <h5 class="card-title">{{ singleCard.title }}</h5>
      <p class="card-text">{{ singleCard.content }}</p>
      <div v-for="Technology in this.singleCard.technologies">
        <a href="#" class="btn btn-primary mt-2">{{Technology.name}}</a>
      </div>
    </div>
</div>

</template>

<style lang="css" scoped> 
    .card{
        width: 18rem;
    }
</style>

