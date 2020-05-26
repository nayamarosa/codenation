const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	let filterEqualIds = productsList.filter(products => ids.includes(products.id));
    
    //buscar o nome e categoria
    let getNameAndCategory = filterEqualIds.map((products) => ({name: products.name, category: products.category}));
    
    //buscar mesma categoria
    let hasSameCategory = filterEqualIds.map((products) => products.category).reduce((accumulator,  currentValue) => {
        accumulator[currentValue] = currentValue in accumulator ? accumulator[currentValue] + 1 : 1;
        return accumulator
    }, {});
    
    //buscar tipo de promoção
    let sameCategoryQuantity = Object.keys(hasSameCategory).length;
    
    let promotionType;
    switch (sameCategoryQuantity) {
        case 1:
        promotionType = promotions[0];
        break;
        case 2:
        promotionType = promotions[1];
        break;
        case 3:
        promotionType = promotions[2];
        break;
        default:
        promotionType = promotions[3];
        break;
    }
    
    //valor total do carrinho (peças com ou sem desconto)
    let totalPrice = filterEqualIds.reduce((accumulator, currentValue) => {
        let getDiscountPrice = currentValue.promotions.find(({looks}) => looks.includes(promotionType));
        return getDiscountPrice ? accumulator + getDiscountPrice.price : accumulator + currentValue.regularPrice;
    }, 0).toFixed(2);
    
    //valor total do carrinho (peças sem desconto)
    let totalRegularPrice = filterEqualIds.reduce((accumulator, currentValue) => {
        return currentValue.regularPrice + accumulator;
    }, 0);
    
    //valor do desconto
    let totalDiscount = (totalRegularPrice - totalPrice).toFixed(2);
    
    //porcentagem do desconto
    let discountPercent = ((totalDiscount / totalRegularPrice ) * 100).toFixed(2) + "%";
    
    return {
		products: getNameAndCategory,
		promotion: promotionType,
		totalPrice: totalPrice,
		discountValue: totalDiscount,
		discount: discountPercent
    };

}

module.exports = { getShoppingCart };
