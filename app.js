const app = new Vue({
    el: "#app",
    data: {
        reviews: [],
        loggedin: false,
        JWT: "",
        createUN: "",
        createPW: "",
        devURL:'http://localhost:3000',
        prodURL:null,
        user:null,
        token:null  
    },
    methods: {
        handleLogin: function(event){
            event.preventDefault()
            const URL = this.prodURL ? this.prodURL : this.devURL
            console.log(URL)
            const user = {username: this.createUN, password: this.createPW}
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
                this.user = data.user
                this.token = data.token
                this.loggedin = true;
                this.createPW = ""
                this.createUN = ""
            })
        },
        handleLogout: function(){
            this.loggedin = false;
            this.user=null;
            this.token=null;
        }
    },
    beforeCreate: function(){
        fetch('https://amusicjournal.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => {
                this.reviews = data
                console.log(data)
            })
    }    
});