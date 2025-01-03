

export default {
    title: "Product Listing",
    name: "productlisting",
    type: "object",
    fields: [
       {title: 'Product Listing Cards',
        name: 'productListingCards',
        type: 'array',
        of: [
           { 
            title: 'Product Listing Card',
            name: 'productListingCard',
            type: 'object',
            fields: [

            {title: 'Product Listing Image', name: 'productListingImage', type: 'image'},
            {title: 'Product Listing Name', name: 'productListingName', type: 'string'},
            {title: 'Product Listing Price', name: 'productListingPrice', type: 'number'},
            {title: 'Product Listing Original Price', name: 'productListingOriginalPrice', type: 'number'},
            {title: 'Product Listing tag', name: 'productListingTag', type: 'boolean', description: 'Sale'},
            ],
        },
        ],
     },
    ],

}