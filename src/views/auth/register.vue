<template>
  <div class="register py-4">
      
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12 mx-auto">
          <h1 class="text-center text-light">REGISTRATION</h1>
          <form>
            
            <div class="row mb-2">
              <div class="col-12 col-sm-6 form-group mb-1">
                <label for="First"> name*</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.name"
                  id="First"
                />
                <span
                  class="text-danger"
                  v-for="message of validation_message.name"
                  :key="`name-${message}`"
                  >{{ message }}<br
                /></span>
              </div>
             
            </div>
            
            <div class="row mb-2">
              <div class="col-12 col-sm-6 form-group mb-1">
                <label for="Email">Email*</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="form.email"
                  placeholder="Email"
                  id="Email"
                />
                <span
                  class="text-danger"
                  v-for="message of validation_message.email"
                  :key="`email-${message}`"
                  >{{ message }}<br
                /></span>
              </div>
              
            </div>

            <div class="row mb-2">
              <div class="col-12 col-sm-6 form-group mb-1">
                <label for="Email">password*</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="form.password"
                  placeholder="Email"
                  id="Email"
                />
                <span
                  class="text-danger"
                  v-for="message of validation_message.password"
                  :key="`password-${message}`"
                  >{{ message }}<br
                /></span>
              </div>
            
            </div>
           

           
         
            <div class="row d-flex justify-content-center">
              <div class="col-3">
                <div
                  class="btn btn-primary round-btn px-3"
                  @click="store"
                 
                >
                  SUBMIT
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
import Api from "@/assets/js/Api";
export default {
  name: "register-component",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      validation_message: {
        name: [],
        email: [],
        password: [],
      },
    
    };
  },
  methods: {
    store() {
      
      Api.post("register", this.form)
    .then((res) => {
      console.log(res.data); // Log the response to inspect its structure
      if (res.data.validation_error) {
        this.validation_message = res.data.validation_message;
        return;
      } else {
        alert("registered");
         location.href = "/";
      }
    })
    .catch((error) => {
      console.error("API Error:", error);
    });
    }
  
  },

};
</script>


