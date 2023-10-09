export default {
    products: (_,{filter},context) => {
        let products = context.products;
        if(filter){
            if(filter.onSale === true){
                products = products.filter(product => product.onSale === true);
            }
            if([1,2,3,4,5].includes(filter.avgRating)){
                products = products.filter(product => {
                    const productReviews = context.reviews.filter(review => review.productId === product.id);
                    const rating = productReviews.reduce((acc,review) => acc + review.rating,0) / productReviews.length;
                    return rating >= filter.avgRating;
                })
            }
        }
        return products;
    },
    product: (parent, {filter},context) => {
        const products = context.products;
        return products.find(product => product.id === args.id);
    },
    categories: (_,__,context) => {
        const categories = context.categories;
        return categories;
    },
    category: (parent, args,context) => {
        const categories = context.categories;
        return categories.find(category => category.id === args.id);
    }
    
}