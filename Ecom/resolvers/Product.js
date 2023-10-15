export default  {
    category: (parent,_,context) => {
        const categories = context.categories;
        return categories.find(category => category.id === parent.categoryId);
    },
    reviews: (parent,_,context) => {
        const reviews = context.reviews;
        return reviews.filter(review => review.productId === parent.id);
    }
}