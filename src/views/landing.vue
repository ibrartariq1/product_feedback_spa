<template>

    <div class="container">
        <div class="row mt-4">
            <div class="col-lg-4 col-md-4 d-flex">
                <div class="card">
                    <div class="card-header">
                        Filters
                    </div>
                    <div class="card-body">
                        
                        <label for="category">Select Category:</label>
                            <select class="form-select mb-2" id="category" v-model="selected_category">
                                <option value="all">Show All</option>
                                <option v-for="cat in categories" :key="cat.id" :value="cat.name">{{ cat.name }}</option>
                            </select>
                        
                        <label for="price-range">Price Range:</label>
                        <input type="range" class="form-range" v-model="pric_range" id="price-range">
                    </div>
                </div>
            </div>
        </div>

         <div class="row mt-4 sm-12"> 
            <div class="col-md-12">
                <div class="row">
                  
                    <div class="col-md-4" v-for="product in filteredProducts" :key="product.id">
                        <div class="card mb-4">
                            
                            <img  src="@/assets/img/download_new.jpg" class="card-img-top" alt="Product 1">
                            <div class="card-body">
                                <h5 class="card-title">{{ product.name }}</h5>
                                <p class="card-text">{{ product.description }}</p>
                                <p class="card-text"> Rs: {{  product.price  }}</p>
                                <p class="card-text"> category: {{  product.category  }}</p>
                                <button @click="addToCart( product.id)" class="btn btn-primary">Show Detail</button>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import axios from '../assets/js/Api';
// import axios from '../api'; 

export default {
  name: "Landing-component",
  data() {
     return {
            all_product: [], 
            categories: [], 
            filteredProducts:[],
            selected_category: 'all',
            pric_range:0,
            
        };
    },
    watch: {
        selected_category(newCategory) {
            if (newCategory === 'all') {
                this.filteredProducts = this.all_product;
            } else {
                this.filteredProducts = this.all_product.filter(all_product => all_product.category === newCategory);
                
            }
        },
        pric_range(price) {
            console.log(price)
            if (price == 0) {
                var products=this.filteredProducts; 
                 this.filteredProducts =products; 
            } else {

              this.filteredProducts = this.filteredProducts.filter(all_product => all_product.price > price);
            }
            
        },
    },

    mounted() {

        axios.get('products')
        .then((response) => {
            this.all_product = response.data.data
            this.filteredProducts = response.data.data
        })
        .catch((error) => {
          console.log(error)
        });

        axios.get('categories').then((response) => {
            this.categories = response.data.category
        })

        
    },
    methods: {
        addToCart(id) {
             let product;
              product = this.filteredProducts.find((product) => product.id === id);
             
              this.$store.commit('setProduct', product);
              this.$router.push({ name: 'detail', params: { id: id } });
        }
    }

};
</script>

