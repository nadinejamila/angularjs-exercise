//wrap your JS in a closure
(function(){

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
            ]
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
            ]
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
            ]
        }
    ];

    var app = angular.module('gemStore', [ ]);

    //controller is attached to the app
    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('TabController', function(){
        this.tab = 1;
        this.setTab = function(tabSet){
            this.tab = tabSet;
        };
        this.isSet = function(setTab){
           return this.tab == setTab;
        };
    });

    app.controller('GalleryController', function(){
        this.current = 0;
        this.setCurrent = function(currentVal) {
            if (currentVal) {
                this.current = currentVal;
            } else {
                this.current = 0;
            }
        };
    });

})();