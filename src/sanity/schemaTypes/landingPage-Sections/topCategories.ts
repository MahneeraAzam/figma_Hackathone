export default{
    title: "Top Categories",
    name: "topCategories",
    type: "object",
    fields: [
       {title: 'Top Categories Cards',
        name: 'topCategoriesCards',
        type: 'array',
        of: [
           { 
            title: 'Top Categories Card',
            name: 'topCategoriesCard',
            type: 'object',
            fields: [
            {title: 'Top Categories Image', name: 'topCategoriesImage', type: 'image'},
            {title: 'Top Categories Name', name: 'topCategoriesName', type: 'string'},
            {title: 'Top Categories Price', name: 'topCategoriesPrice', type: 'number'},
            ],
              },
            ],
        },
    ],

}