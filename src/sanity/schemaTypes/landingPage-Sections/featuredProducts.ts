import { title } from "process";

export default {
    title: 'Card Section',
    name: 'cardSection',
    type: 'object',
    fields: [
        // {title: 'Card Image', name: 'cardImg', type: 'image'},
        //br br cards
        {title: 'Card Section',
             name: 'cardSection',
              type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                    {title: 'Card Section Image', name: 'cardSecImg', type: 'image', },
                    {title: 'Card Section Heading', name: 'cardSecHeading', type: 'string', },
                    {title: 'Card Section SubHeading', name: 'cardSecSubHeading', type: 'string', },
                    {title: 'Card Section Price', name: 'cardSecPrice', type: 'number', },
                ]
              }
            ]}


    ]

}