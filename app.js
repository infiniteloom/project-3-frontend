


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
        passwordFieldType: 'password',
        randomReviewsArr: [],
        reviews: [],
        singleReview: null,
        createReview: null,
        editReview: null,
        selectedReview: null,
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

        switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'createPW' ? 'text' : 'createPW'
    },


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
            // console.log(`the id is ${this.selectedReview}`)

            const ID = this.singleReview ? this.singleReview.id : this.selectedReview
            console.log(`the id is ${ID}`)

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
        updateReview: function(event){
            // updateReviewPhoto = "https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg"
            updatedReview=this.new_review
            updatedReview.review_text = quill.root.innerHTML
            // this.singleReview.profile_pic_url = updateReviewPhoto
            const ID = this.singleReview.id;
            fetch(`${URL}/reviews/${ID}`, {
                method: "put",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${this.token}`
                },
                body: JSON.stringify(updatedReview)
            })
            .then((response) => {
                this.reset();
                console.log(updatedReview);
                console.log(`${ID}` + " updated");
                
            });
            // 
        },
        showUpdateReview: function(){
            if(this.dash){
                this.singleReview = this.reviews[this.selectedReview]
            }
            this.editReview = true;
            this.new_review = {...this.singleReview};
            quill.root.innerHTML = this.singleReview.review_text
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

               //  MAYBE REFACTOR?
                .then(this.reset)
                this.createError = false;
            }
        },
        reset: function () {
            this.editReview = null,
            this.aboutme = null,
            this.createReview = null;
            this.dash = null; 
            this.singleReview = null;
            this.selectedReview = null;
            fetch(`${URL}/reviews`)
                .then(response => response.json())
                .then(data => {
                    this.reviews = data
                    console.log(data)
                })
            document.querySelector('.navbar-collapse').classList.remove('show')
            window.scrollTo(0,0)
        },
        randomReviews: function (){
            let randomInd = []
            let random
            while(randomInd.length < 3){
                random = Math.floor(Math.random()*this.reviews.length)
                // console.log('this is the length of reviews in randomreviews function call : ' + this.reviews.length)
                // console.log('randomInd array is valued : ' + randomInd)
                //test to see if random num already exists in randomInd array.
                // console.log(this.reviews)
                if(!randomInd.includes(random)){
                    // test to see if there is a review at this.reviews at index of random num
                    if(this.reviews[random]){
                        // if random num does not exist in array and there is a review at this.reviews[random] then push random num to randomInd
                        randomInd.push(random)
                    }
                }
            }

            let randomImg1 = this.reviews[randomInd[0]]
            let randomImg2 = this.reviews[randomInd[1]]
            let randomImg3 = this.reviews[randomInd[2]]
            this.randomReviewsArr.push(randomImg1, randomImg2, randomImg3)
            console.log(this.randomReviewsArr)
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
            .then(()=> this.randomReviews())
            
            // .then(this.randomReviews)
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
