const app = new Vue({
    el: "#app",
    data: {
        reviews: []
    },
    methods: {
    },
    beforeCreate: function(){
        fetch('https://amusicjournal.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => {
                this.reviews = data
                console.log(data)
            })
    }
})