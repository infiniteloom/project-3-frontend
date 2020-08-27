const URL = this.prodURL ? this.prodURL : this.devURL

const CarouselComponent = {
  template: `
    <img-src/>
  `,

  props: ['img-src'],
};
const app = new Vue({
    el: "#app",
    components: {
    CarouselComponent,
  },
  // template: `
  //   <div>
  //     <carousel-component
  //       v-for="(review, index) in reviews"
  //       :class="{ 'active': index === 0 }"
  //       :img-src="review.profile_pic_url">
  //     </carousel-component>
  //   </div>
  // `,

    data: {
        reviews: [],
        singlereview: null,
        search: "", //defining the search property and empty value
        loggedin: false,
        loginerror: false,
        // JWT: "",
        createUN: "",
        createPW: "",
        devURL:'http://localhost:3000',
        prodURL:'https://amusicjournal.herokuapp.com',
        user:null,
        token:null,

        // selectedImage: null


    },
    methods: {
        handleLogin: function (event) {
            event.preventDefault()
            const URL = this.prodURL ? this.prodURL : this.devURL
            console.log(URL)
            const user = {
                username: this.createUN,
                password: this.createPW
            }
            console.log(user)
            fetch(`${URL}/login`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    this.loginerror = true

                } else {
                    this.loginerror = false
                    this.user = data.user
                    this.token = data.token
                    this.loggedin = true;
                    this.createPW = ""
                    this.createUN = ""
                }
            })
        },
        handleLogout: function () {
            this.loggedin = false;
            this.user = null;
            this.token = null;
            this.loginerror = false
        },
        // if logged in, watch ruby on rails and vue #6 video around minute 4
        openSingleReview: function (event) {
            const URL = this.prodURL ? this.prodURL : this.devURL
            // console.log(`id number is ${event.target.id}`)
            fetch(`${URL}/reviews/${event.target.id}`)
            .then(response => response.json())
            .then(data => {
                this.singlereview = data
                console.log(data)
            })
        },
        handleDelete: function (event) {
            const URL = this.prodURL ? this.prodURL : this.devURL;
            const ID = this.singlereview.id;
            // console.log(`id number is ${event.target.id}`)
            fetch(`${URL}/reviews/${ID}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `bearer ${this.token}`,
                },
            }).then((response) => {
                this.reset();
                console.log(`${ID}` + " deleted");
            });
        },
        reset: function () {
            this.singlereview = false;
            fetch(`${URL}/reviews`)
                .then(response => response.json())
                .then(data => {
                    this.reviews = data
                    console.log(data)
                })
            location.reload();
        },
   //      randomItem (items) {
   //       return this.reviews[Math.floor(Math.random()*this.reviews.length)];
   //     },
   //     generate () {
   //   this.selectedImage = this.randomItem(this.reviews.profile_pic_url)
   // }
    },
    // Used the beforeMount lifecycle method instead of beforeCreate to fix how the app was retrieving the URL
    // beforeCreate would trigger this code block before any other JS code even loads. beforeMount allows this app.js
    // to be loaded (i.e. the variables prodURL and devURL used in this ternary) before the code block is run.
    beforeMount: function(){
        const URL = this.prodURL ? this.prodURL : this.devURL

        fetch(`${URL}/reviews`)
            .then(response => response.json())
            .then(data => {
                this.reviews = data
                console.log(data)
            })
    },

    //using the search value to filter out matches to album title
    computed: {
        filteredReviews: function () {
            //filtering through each review through the reviews array
            return this.reviews.filter((review) => {
                //if an album search matches the value of the search, it is kept in the array. if not, it is took out
                return review.album_title.toLowerCase().match(this.search.toLowerCase()) || review.artist_name.toLowerCase().match(this.search.toLowerCase())
            })
        }
    //     filteredImages: function () {
    //         //filtering through each review through the reviews array
    //         return this.reviews.filter(image)
    //     }
  },

  // created() {
  //   this.selectedImage = this.randomItem(this.reviews.profile_pic_url)
  // }

});
