var app = new Vue({
    el: '#app',
    data: {
        slugText: 'The Quick #C*sdf Brown 29'
    },
    computed:{
        slugtize: function(){
            // fungsi kode ini menampilkan nilai balik dari slugText
            return this.slugText
        }
    }
})