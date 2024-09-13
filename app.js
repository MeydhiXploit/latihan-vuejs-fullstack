var app = new Vue({
    el: '#app',
    data: {
        maximum:50,
        //nilai dari variabel products kosong 
        products: null,
        // nilai arraynya null
        cart: [],
        style:{
            label: ['font-weight-bold', 'mr-2']
        }
    },
    mounted: function(){
        fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json()
        .then(data => {
            this.products = data;
        })
    )
    },
    //tanpa di tambahkan function karena methods ini bersifat properti
    methods: {
        addItem: function(products){
            this.cart.push(products);
        },
        removeItem: function (product) {
            let index = this.cart.findIndex(item => item === product);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        }
    }
})