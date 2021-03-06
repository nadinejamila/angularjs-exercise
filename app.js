//wrap your JS in a closure
(function(){

    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    /*
    app.controller('StoreController', ['$http', function($http){
        var store = this;
        store.products = [];
        
        $http.get('/store-products.json').success(function(data){
            store.products = data;
        });
    }]);
    */

    app.controller('TabController', function(){
        this.tab = 1;
        this.setTab = function(tabSet){
            this.tab = tabSet;
        };
        this.isSet = function(setTab){
           return this.tab == setTab;
        };
    });

    var gems = [
        { 
            name: 'Azurite', 
            price: 2.95,
            canPurchase: true,
            soldOut: false,
            description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
            shine: 8,
            images: [
                "images/gem1.jpg",
                "images/gem2.jpg"
            ],
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
                }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }],
            shine: 9,
            rarity: 6,
            color: '#EEE',
            faces: 12
        },
        { 
            name: 'Bloodstone', 
            price: 5.95,
            canPurchase: true,
            soldOut: false,
            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
            shine: 9,
            images: [
                "images/gem3.jpg",
                "images/gem4.jpg"
            ],
            reviews: [{
                stars: 3,
                body: "I think this gem was just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org",
                createdOn: 1397490980837
                }, {
                stars: 4,
                body: "Any gem with 12 faces is for me!",
                author: "gemsRock@example.org",
                createdOn: 1397490980837
            }],
            shine: 9,
            rarity: 6,
            color: '#EEE',
            faces: 12,
        },
        { 
            name: 'Zircon', 
            price: 3.95,
            canPurchase: true,
            soldOut: false,
            description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
            shine: 70,
            images: [
                "images/gem5.jpg"
            ],
            reviews: [{
                stars: 1,
                body: "This gem is WAY too expensive for its rarity value.",
                author: "turtleguyy@example.org",
                createdOn: 1397490980837
                }, {
                stars: 1,
                body: "BBW: High Shine != High Quality.",
                author: "LouisW407@example.org",
                createdOn: 1397490980837
                }, {
                stars: 1,
                body: "Don't waste your rubles!",
                author: "nat@example.org",
                createdOn: 1397490980837
            }],
            shine: 70,
            rarity: 2,
            color: '#000',
            faces: 6,
        }
    ];

})();