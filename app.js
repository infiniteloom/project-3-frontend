// const toggleShow = () =>{
//     if(toggleEl){
//         console.log('toggle has been hidden')
//         toggleEl.hide()
//     }
//     else{
//         console.log('toggle has been shown')
//         toggleEl.show()
//     }
//     console.log('reaching the toggle show function')
// }

// const toggleEl = $('.toggle-element')
// toggleEl.hide()
// const createToggleLink = $('#toggle-show-create-form')
// console.log(createToggleLink)
// createToggleLink.on('click', toggleShow)




const URL = this.prodURL ? this.prodURL : this.devURL

const app = new Vue({
    el: "#app",
    data: {
        reviews: [],
        singleReview: null,
        createReview: null,
        editReview: false,
        search: "", //defining the search property and empty value
        loggedin: false,
        loginerror: false,
        createUN: "",
        createPW: "",
        devURL:'http://localhost:3000',
        prodURL:'https://amusicjournal.herokuapp.com',
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
                this.singleReview = data
                console.log(data)
            })
        },
        showCreateNewReview: function () {
            this.createReview = !this.createReview      
        },
        createNewReview: function (event) {
            const URL = this.prodURL ? this.prodURL : this.devURL
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
            }
 
            this.createError = false;
            createreview = false;
        }
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
     }
});






const options ={
    theme: 'snow',
    placeholder: 'Enter a new review...'
}

var quill = new Quill('#editor', options)

