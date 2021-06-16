//lesson 4 (task 1,2)
const regExp = /^'|(?<=[^\w])'|'(?=[\s,\.])/g
const text = `'lavorare' aren't studiare`;
console.log(text)
console.log(text.replace(regExp, '"'))





//=============================================================================================================
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const makeGETRequest = (url) => {
    return new Promise((resolve) => {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(JSON.parse(xhr.response));
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    })
}


class GoodsItem {
    constructor(product_name, price) {
        this.title = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button>Add</button></div>`;
    }
}

class GoodsList {
    constructor() {
        //  this.goods = [];
    }
    async fetchGoods() {
        return await fetch(`${API_URL}/catalogData.json`).then(resp => resp.json());
    }

    render(goods) {
        let listHtml = document.querySelector('.goods-list');
        goods.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHtml.insertAdjacentHTML("afterend", goodItem.render());
        });
    }
}
const goodsListInstance = new GoodsList();
goodsListInstance.fetchGoods()
    .then((data) => goodsListInstance.render(data));



/* fetchGoods() {
    this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
        { title: 'Shoes', price: 250 },
    ];
}

render() {
    let listHtml = '';
    this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price);
        listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
}
}

const list = new GoodsList();
list.fetchGoods();
list.render(); */




//=============================================================================================================


/* const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = ({ title = 'product', price }) => {
    return `<div class="goods-item">
    <h3 class="goods-header">${title}</h3>
    <p class="goods-price">${price}</p></div>`
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);*/
