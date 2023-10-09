<template>
    <div class="register py-4">
     
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 mx-auto">
            <h1 class="text-center text-light">Add Feedback of Product</h1>
            <form>
              
              <div class="row mb-2">
                <div class="col-12 col-sm-6 form-group mb-1">
                  <label for="First">Title*</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.title"
                    placeholder="First name"
                    id="First"
                  />
                  <span
                    class="text-danger"
                    v-for="message of validation_message.title"
                    :key="`salutation-${message}`"
                    >{{ message }}<br
                  /></span>
                </div>
                <div class="col-12 col-sm-6 form-group mb-1">
                  <label for="Last">Description*</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.description"
                    placeholder="Last name"
                    id="Last"
                  />
                  <span
                    class="text-danger"
                    v-for="message of validation_message.description"
                    :key="`salutation-${message}`"
                    >{{ message }}<br
                  /></span>
                </div>
                <div class="col-12 col-sm-6 form-group mb-1">
                  <label for="Last">image*</label>
                  <input type="file" class="form-control" v-on:change="onImageChange">
                  <span
                    class="text-danger"
                    v-for="message of validation_message.last_name"
                    :key="`salutation-${message}`"
                    >{{ message }}<br
                  /></span>
                </div>
              </div>
             
  
              
              <div class="row d-flex justify-content-center">
                <div class="col-3">
                  <div
                    class="btn btn-primary round-btn px-3"
                    @click="store"
                    v-if="!loading"
                  >
                    SUBMIT
                  </div>
                  <div
                    class="btn btn-primary round-btn px-3"
                    disabled
                    v-if="loading"
                  >
                    Loading..
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  </template>
  
  <script>
  import axios from '../assets/js/Api';
  import { mapState } from 'vuex';



  export default {
    name: "register-component",
    data() {
      return {
        loading: false,
        image:"",
        form: {
          title: "",
          description: "",
        },
        validation_message: {
            title: [],
            description: [],
        },
        
      };
    },
    computed: {
      ...mapState(['product']),
     },
    methods: {
        onImageChange(e){
                this.image = e.target.files[0];
        },
        successModal() {
          this.form = {
            title: "",
            description: "",
          };
          this.loading = false;

         alert("feedback saved")
         this.$router.push({ name: 'detail', params: { id: this.product.id } });
        },
        
      store() {
        this.loading = true;
        let formData = new FormData();
        formData.append('image', this.image); 
        this.form['product_id']= this.product.id
        formData.append('data', JSON.stringify(this.form));
        const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }



        axios.post("add-feedback",formData,config)
          .then((res) => {
            this.loading = false;
            this.resetValidation();
  
            if (res.data.validation_error) {
              this.validation_message = res.data.validation_message;
              return;
            }
            if (!res.data.error) this.successModal();
          });
      },
      resetValidation() {
        this.validation_message = {
            title: [],
            description: [],
            image: [],
        };
      },
    },
    mounted() {
    //   this.globalDeviceCheck();
    },
  };
  </script>
  