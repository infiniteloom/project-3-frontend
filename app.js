


const devURL='http://localhost:3000'
const prodURL='https://amusicjournal.herokuapp.com'
const URL = prodURL ? prodURL : devURL

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
    data: {
        reviews: [],
        singleReview: null,
        createReview: null,
        editReview: null,
        dash:null,
        aboutme: null,
        search: "", //defining the search property and empty value
        loggedin: false,
        loginerror: false,
        createUN: "",
        createPW: "",
        // devURL:'http://localhost:3000',
        // prodURL:'https://amusicjournal.herokuapp.com',
        user:null,
        token:null,
        new_review: {
            // created_by: this.user && this.user.id,
            artist_name: "",
            album_title: "",
            release_date: "",
            record_label: "",
            img_url: "",
            profile_pic_url: ""
        },
    },
    methods: {
        handleLogin: function (event) {
            event.preventDefault()
            // const URL = this.prodURL ? this.prodURL : this.devURL
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
        openSingleReview: function (event) {
            // const URL = this.prodURL ? this.prodURL : this.devURL
            fetch(`${URL}/reviews/${event.target.id}`)
            .then(response => response.json())
            .then(data => {
                this.singleReview = data
                console.log(data)
            })
        },
        openAboutMe: function (event) {  // TEAM ABOUT ME PAGE
            this.reset()
            this.aboutme= true 
        },
        callDash: function (event){
            this.reset()
            this.dash=true
        },
        
        handleDelete: function (event) {
            console.log(`the id is ${this.singleReview.id}`)

            // const URL = this.prodURL ? this.prodURL : this.devURL;
            const ID = this.singleReview.id;
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
            this.editReview = null,
            this.aboutme = null,
            this.createReview = null;
            this.dash = null; 
            this.singleReview = null;
            fetch(`${URL}/reviews`)
                .then(response => response.json())
                .then(data => {
                    this.reviews = data
                    console.log(data)
                })
            // location.reload;
            document.querySelector('.navbar-collapse').classList.remove('show')
            window.scrollTo(0,0)

        },
        showCreateNewReview: function () {
            this.createReview = true    
        },
        createNewReview: function (event) {
            // const URL = this.prodURL ? this.prodURL : this.devURL
            const review = {
                ...this.new_review,
                created_by: this.user.id,
                review_text: quill.root.innerHTML
            }
            // gather the values from the review object
            const values = Object.values(review)
            console.log(values)
            let allFieldsOk
            for(let value in values){
                if(!value){
                    this.createError = true;
                    console.log('ERROR PLEASE ENTER ALL FIELDS')
                    allFieldsOk = false
                }
            }
            if (allFieldsOk = true){
                fetch(`${URL}/reviews`, {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : `bearer ${this.token}`
                    },
                    body: JSON.stringify(review)
                })

               //  MAYBE REFACTOR
                this.reset()
                this.createError = false;
            }
            
        }
    },
    // Used the beforeMount lifecycle method instead of beforeCreate to fix how the app was retrieving the URL
    // beforeCreate would trigger this code block before any other JS code even loads. beforeMount allows this app.js
    // to be loaded (i.e. the variables prodURL and devURL used in this ternary) before the code block is run.
    beforeMount: function(){
        // const URL = this.prodURL ? this.prodURL : this.devURL
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
     }
});






const options ={
    theme: 'snow',
    placeholder: 'Enter a new review...'
}

var quill = new Quill('#editor', options)

