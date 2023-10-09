

<template>

<div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h2>{{ product.name }}</h2>
                <img  src="@/assets/img/download_new.jpg" alt="Product Image" class="img-fluid">
                <p>Price: {{ product.price }}</p>
                <p>{{ product.description }}</p>
            </div>
            <div class="col-md-6">

                <div class="row">
                    <div class="col-sm-8">
                        <h3>Product Feedback</h3>
                    </div>
                    <div class="col-sm-4">
                        <button   @click="AddFeedback( product.id)" class="btn btn-primary">Add Feedback</button>
                    </div>
                </div>
                <ul class="list-group mt-2">
                    <li v-for="item in feedback.data" :key="item.id" class="list-group-item">
                        <strong>{{item.title}}</strong>
                        <p>{{ item.description }}</p>
                        <button @click="likeFeedback(item.id)" class="btn btn-link">
                            <i class=" btn bi bi-heart" :class="{ 'text-danger': item.is_liked }"> --{{ item.likes_count }}</i>
                            
                        </button>
                    </li>
                </ul>

                <b-pagination
                        v-if="feedback.last_page > 1"
                        v-model="currentPage"
                        :total-rows="feedback.total"
                        :per-page="feedback.per_page"
                        aria-controls="feedback-pagination"
                >
                </b-pagination>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import axios from '../assets/js/Api';

export default {
    name: "Deatial-component",
    data() {
      return {
        feedback: {
        data: [], 
        current_page: 1,
        last_page: 1,
        total: 0,
        per_page: 10,
      },
      currentPage: 1,
      };
    },
    computed: {
        ...mapState(['product'])
      
    },
    methods: {
        likeFeedback(id)
        {
                
            let token = localStorage.getItem("participant_token");
            const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                accept: "application/json",
            },
            params: {
                type: "visit",
                event: null,
            },
            };
            axios
            .post('vote-feedback', { feedback_id: id }, config)
            .then((res) => {
                if (!res.data.error) {
                const index = this.feedback.data.findIndex((item) => item.id === id);
                if (index !== -1) {
                    this.$set(this.feedback.data[index], 'is_liked', res.data.is_liked);
                    this.$set(this.feedback.data[index], 'likes_count', res.data.likes_count);
                }
                }
            })
            .catch(() => {
                alert("make sure you are login")
            });






            
          
        },
        AddFeedback(id) {
              this.$router.push({ name: 'addfeedback', params: { id: id } });
        },
        loadFeedback(page) {
        const productId = this.product.id; 

        axios.get(`/get-product-feedback?product_id=${productId}&page=${page}`)
            .then(response => {
                console.log(response.data)
                this.feedback = response.data.feedback;
            })
            .catch(error => {
            console.error('Error fetching feedback:', error);
            });
    },
    
    },
    watch: {
    currentPage(newPage) {
      this.loadFeedback(newPage);
    },
  },
    mounted() {
        this.loadFeedback(this.currentPage);
    },




};
</script>

<style>
@import "~bootstrap-icons/font/bootstrap-icons.css";
</style>