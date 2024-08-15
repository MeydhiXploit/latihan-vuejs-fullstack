var dataProduct = {
    maximum: 50,
    products: [{
            "id": "429",
            "name": "Strawberry Mineral Water",
            "description": "An 8-ounce serving of our refreshing",
            "price": "2.80",
            "image_title": "mineral-water-strawberry_600px",
            "image": "https://www.coldwear.com.sg/image/cache/product/product-72679/10115__Joel__1666174307_MWS020037_BLU_2-272x408.jpg",
        },
        {
            "id": "440",
            "name": "Adult Mid Length Goose Down Jacket",
            "description": "An 10-ounce serving of our refreshing",
            "price": "9.99",
            "image_title": "adult-mid_600px",
            "image": "https://www.coldwear.com.sg/image/cache/product/product-76165/10115__Joel__1722305075_10115__Joel__1571217725_LDJ019117_BLU2-opt_1-272x408.jpg",
        },
        {
            "id": "450",
            "name": "man",
            "description": "An 11-ounce serving of our refreshing",
            "price": "33",
            "image_title": "cool",
            "image": "https://www.coldwear.com.sg/image/cache/product/product-72679/10115__Joel__1666174307_MWS020037_BLU_2-272x408.jpg",
        },
        {
            
            "id": "460",
            "name": "adidas",
            "description": "adidas logo",
            "price": "24.99",
            "image_title": "adidas",
            "image": "./img/adidas.png",
            
        }

    ]
};

var app = new Vue({
    el: '#app',
    data: dataProduct
});