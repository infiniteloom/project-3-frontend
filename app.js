const URL = this.prodURL ? this.prodURL : this.devURL

const app = new Vue({
    el: "#app",
    data: {
        reviews: [],
        singlereview: null,
        search: "", //defining the search property and empty value
        loggedin: false,
        // JWT: "",
        createUN: "",
        createPW: "",
        devURL:'http://localhost:3000',
        prodURL:'https://amusicjournal.herokuapp.com',
        user:null,
        token:null,

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
                        alert("Invalid Username or Password. Please check your entry and try again.");
                    } else {
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
