(function() {

    enum Currencies {
        EURO = 'EUR',
        DOLLARS = 'USD'
    }

    interface Product {
        id: number;
        name: string;
        category: string;
        quantity: number;
        price: number;
        currency: Currencies;
    }

    var myProduct: Product = {
        id: 1,
        name: 'biscotti',
        category: 'dolci',
        quantity: 10,
        price: 2,
        currency: Currencies.EURO
    };

    enum ProductCategories {
        PASTA = 'pasta',
        SWEETS = 'sweets',
        VEGETABLES = 'vegetables'
    };

    interface ProductV2 {
        id: number;
        name: string;
        category: ProductCategories;
        quantity: number;
        price: number;
    }

    const myProduct2: ProductV2;
    myProduct2.id = 999;
    myProduct2.name = 'Nutella biscuits';
    myProduct2.category = ProductCategories.SWEETS;
    myProduct2.price = 2.99;
    myProduct2.quantity = 10;

})();
