import { v4 as uuid } from 'uuid';

export default {
    addCategory: (_,{input},context) => {
        const categories = context.categories;
        const category = {
            id: uuid(),
            name: input.name
        };
        categories.push(category);
        return category;
    },
    addProduct: (_,{input},context) => {
        const products = context.products;
        const product = {
            id: uuid(),
            name: input.name,
            categoryId: input.categoryId,
            price: input.price,
            onSale: input.onSale || false,
            quantity: input.quantity,
            description: input.description,
            image: input.image
        };
        products.push(product);
        return product;
    },
    addReview: (_,{input},context) => {
        const reviews = context.reviews;
        const review = {
            id: uuid(),
            productId: input.productId,
            rating: input.rating,
            title: input.title,
            comment: input.comment

        };
        reviews.push(review);
        return review;
    },
    deleteCategory: (_,{id},context) => {
        const categories = context.categories;
        const categoryIndex = categories.findIndex(category => category.id === id);
        if(categoryIndex === -1) throw new Error("Category not found");
        const deletedCategory = categories.splice(categoryIndex,1);
        const products = context.products;
        products.forEach((product,index) => {
            if(product.categoryId === id){
                product.categoryId = null;
            }
        });
        return deletedCategory[0];
    },
    updateCategory: (_,{id,input},context) => {
        const categories = context.categories;
        const index = categories.findIndex(category => category.id === id);
        if(index ===  -1) throw new Error("Category not found");
        categories[index] = {
            ...categories[index],
            ...input
        };
        return categories[index];
    }
}