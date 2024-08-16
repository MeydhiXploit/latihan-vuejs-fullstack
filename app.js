var app = new Vue({
    el: '#app',
    data: {
        maximum:50,
        products:null
    },
    mounted: function(){
        //lifecycle hook vue.js yang dapat di panggil setelah instance vue sepenuhnya di buat
        //dan elemen DOM terkait telah di masukkan kedalam halaman.
        fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json()
        .then(data => {
            this.products = data;
        })
    )
    }
});