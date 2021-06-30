const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        allGoods: [],
        filteredGoods: [],
        searchLine: '',
        cartGoods: [],
        isVisibleCart: false

    },
    methods: {
        filter(searchLine) {
            this.filteredGoods = searchLine ?
                this.allGoods.filter(product => product.product_name.toLowerCase().includes(searchLine.toLowerCase())) :
                this.allGoods;
        },
        addToCart(prod) {
            this.cartGoods.push(prod);
        },
        removeFromCart(index) {
            this.cartGoods = [...this.cartGoods.slice(0, index), ...this.cartGoods.slice(index + 1)];
        }
    },
    mounted: async function fetchGoods() {
        return await fetch(`${API_URL}/catalogData.json`)
            .then(resp => resp.json())
            .then(data => {
                this.allGoods = data;
                this.filteredGoods = data;
            });
    },
});

Vue.component('component-search', {
    template: `<form action="#" class="search-form">
        <input type="text" class="search-field">
        <button class="btn-search" type="submit" @click="filter(searchLine)">
            <i class="fas fa-search"></i>
        </button>
    </form>`
})

Vue.component('component-cart', {
    template: `<button class="btn-cart" type="button">Cart</button>`
})

export default {
    ReformatStr
};
