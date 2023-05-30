<script>
import axios from 'axios';

export default{
    name: "AppMain",
    data(){
        return{
            postsData: []
        }
    },

    methods: {
        getPosts(){
            axios.get('http://localhost:8000/api/posts')
            .then(response =>{
                this.postsData = response.data.results;
                console.log(this.postsData);
            })
        }
    },
    mounted(){
        this.getPosts();
    } ,

}

</script>

<template>

</template>