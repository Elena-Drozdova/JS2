

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = ({ title = 'product', price }) => {
    return `<div class="goods-item"><h3 class="goods-header">${title}</h3>
    <p class="goods-price">${price}</p></div>`
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);

class CartGoods {
    // корзина товаров
}
class CartItem {
    // элемент корзины
}
