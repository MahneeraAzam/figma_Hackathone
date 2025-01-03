export default {
    title: "Trending Products",
    name: "trendingProducts",
    type: "object",
    fields: [
       {title: 'Trending Products Cards',
        name: 'trendingProductsCards',
        type: 'array',
        of: [
           { 
            title: 'Trending Products Card',
            name: 'trendingProductsCard',
            type: 'object',
            fields: [
            {title: 'Trending Products Image', name: 'trendingProductsImage', type: 'image'},
            {title: 'Trending Products Name', name: 'trendingProductsName', type: 'string'},
            {title: 'Trending Products Price', name: 'trendingProductsPrice', type: 'number'},
            {title: 'Trending Products Original Price', name: 'trendingProductsOriginalPrice', type: 'number'},
            ],
        },
        ],
     },
    ],
}