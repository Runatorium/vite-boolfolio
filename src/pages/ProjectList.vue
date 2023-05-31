<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';


export default{

    components: {
        ProjectCard,
    },
    name: "ProjectList",
    data() {
        return {
            postsData: [],
        };
    },
    methods: {
    async getPosts() {
        await axios.get("http://localhost:8000/api/posts")
                .then(response => {
                this.postsData = response.data.results;
            });
        }
    },
    mounted() {
        this.getPosts();
    },

}

</script>


<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-3" v-for="card in this.postsData">
                    <ProjectCard :singleCard="card"></ProjectCard>
                </div>
            </div>
        </div>
    </main>
</template>