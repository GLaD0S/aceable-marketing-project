const app = new Vue({
    el: '#app',
    data: {
        products: [],
        lastSortMethod: "dec",
    },
    methods: {
        /* Helper function for sorting prices in decending order */
        sortPriceDecending () {
            this.products.sort((a, b) => {
                return a.price - b.price;
            });
        },
        /* Helper function for sorting prices in ascending order */
        sortPriceAscending () {
            this.products.sort((a, b) => {
                return (a.price - b.price) * -1;
            });
        },
        /* Helper function for toggling between sorting state based on previous sort method used. */
        sortToggle () {
            console.log("in Sort method");
            if(this.lastSortMethod == "dec") {
                this.sortPriceAscending();
                this.lastSortMethod = "asc";
            } else {
                this.sortPriceDecending();
                this.lastSortMethod = "dec";
            }
        }
    },
    created () {
        axios.get('https://mkt-endpoint.now.sh/products')
            .then((response) => {
                this.products = response.data;
                this.sortPriceDecending();
            })
            .catch((error) => {

            });
    },
});