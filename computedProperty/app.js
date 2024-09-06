var app = new Vue({
    el: '#app',
    data: {
        slugText: 'The Quick #C*sdf Brown 29'
    },
    computed:{
        slugetize: function(){
            return this.slugText
            .toLowerCase()
            .replace(/[^\w ]+/g,'')
            .replace(/ +/g,'-') + '-' + this.now;
        }
    },
    method:{
        now: function(){
            var date = new Date();
            // melakukan nilai balik
            return(
                // kita akan mendapatkan get Hours
                String(date.getHours()) +
                String(date.getMinutes()) +
                String(date.getSeconds()) 
            );
        }
    }
})