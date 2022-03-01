var eventBus = new Vue()

Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
  <div>
   
  

    <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
    <div class=" product card cardPropia">
    <div class="product-image imgProducto">
      <img v-bind:src="image">
    </div>
    <div class="card-body">
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of stock</p>
        <!-- <p>User is premium: {{ premium }}</p>-->
        <p>Shipping: {{ shipping }}</p>
          <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
            :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">
          </div>
      </div>
    </div>
    <div class="card-footer">
      <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }"
        class="btn btn-primary">Add to cart</button>
      <button v-on:click="removeCart" class="btn btn-danger">Remove</button>
    </div>
  </div>   
    </div>
    <div class="col-md-8">
      <div class="card-body">
          
      <product-tabs :reviews="reviews" :details="details"></product-tabs>

      </div>
    </div>
  </div>
</div>

</div>
  `,
  data() {
    
    return {
      brand: "Camiseta",
      product: "Camiseta 1",
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 5540,
          variantColor: "black",
          variantImage: "./assets/camiseta1.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 2212,
          variantColor: "with",
          variantImage: "./assets/camisetaBlanca.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 7543,
          variantColor: "red",
          variantImage: "./assets/camisetaRoja.jpg",
          variantQuantity: 10,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    removeCart() {
      this.$emit(
        "remove-to-cart",
        this.variants[this.selectedVariant].variantId
      );
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },showDetails(){
      this.$emit("show-details",this.details);
    }
  },
  computed: {
    title() {
      return (
        this.brand + " " + this.variants[this.selectedVariant].variantColor
      );
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    }
  },
  mounted(){
    eventBus.$on('review-submitted',productReview=>{
      this.reviews.push(productReview)
    })
  }
});

Vue.component("product-review", {
  template: `
 <div class="formContainer">
  <form class="review-form" @submit.prevent="onSubmit">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{error}}</li>
        </ul>
    </p>

  <div class="row mb-3">
    <label for="name" class="col-sm-4 col-form-label">Name</label>
    <div class="col-sm-8">
      <input class="form-control" id="name" v-model="name">
    </div>
  </div>
  <div class="row mb-3">
    <label for="review" class="col-sm-4 col-form-label">Review</label>
    <div class="col-sm-8">
      <textarea class="form-control" id="review" v-model="review" ></textarea>
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-4 pt-0">Rating</legend>
    <div class="col-sm-8">
      <select id="rating" class="form-select" v-model.number="rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  </fieldset>
  <div class="row mb-3">
    <label for="recomended" class="col-sm-5 col-form-label">Recomended</label>
    <div class="col-sm-7">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="yes" v-model="recomended">
        <label class="form-check-label" for="inlineRadio1">Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="no" v-model="recomended">
        <label class="form-check-label" for="inlineRadio2">No</label>
      </div>
    </div>
  </div>
  <input class="btn btn-success" type="submit" value="Submit">
</form>
</div>
 `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      recomended: "yes",
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recomended: this.recomended,
        };
        eventBus.$emit("review-submitted", productReview);
        this.name = null;
        this.review = null;
        this.rating = null;
      } else {
        if (!this.name) this.errors.push("Name required.");
        if (!this.review) this.errors.push("Review required.");
        if (!this.rating) this.errors.push("Rating required.");
      }
    },
  },
});

Vue.component('product-tabs',{
  props:{
    reviews:{
      type:Array,
      required:true,

    },
    details:{
      type:Array,
      required:true
    }
  },
  template:`
  <div>
    <span class="tab btn btn-warning"
          :class="{ activeTab: selectedTab === tab}"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectedTab=tab"
          >{{ tab }}  </span>


          <div v-show="selectedTab === 'Details'">
            <ul>
              <li v-for="(detail, index) in details">{{ detail }}</li>
            </ul>
          </div>
      
      <div v-show="selectedTab === 'Reviews'">
          <h2>Reviews</h2>
          <p v-if="!reviews.length">There are no reviews yet.</p>
            <ul>
              <li v-for="review in reviews">
                <p>{{ review.name }}</p>
                <p>{{ review.review }}</p>
                <p>Rating: {{ review.rating }}</p>
                <p>Recomended: {{ review.recomended }}</p>
              </li>
            </ul>
        </div>
        <product-review v-show="selectedTab === 'Make a Review'"></product-review>
  </div>


  `,
  data(){
    return{
      tabs:['Details','Reviews','Make a Review'],
      selectedTab:'Reviews',    
    }
  }
})

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeCart(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      } else {
        console.log("Product isn't in cart");
      }
    },
  },
});
