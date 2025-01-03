import { title } from "process";

export default {
    title: "Latest Blog",
    name: "latestBlog",
    type: "object",
    fields: [
       {title: 'Latest Blog Cards',
        name: 'latestBlogCards',
        type: 'array',
        of: [
           { 
            title: 'Latest Blog Card',
            name: 'latestBlogCard',
            type: 'object',
            fields: [
            {title: 'Latest Blog Image', name: 'latestBlogImage', type: 'image'},
            {title: 'Latest Blog Date', name: 'latestBlogDate', type: 'date'},
            {title: 'Latest Blog Heading', name: 'latestBlogHeading', type: 'string'},
            {title: 'Latest Blog Description', name: 'latestBlogDescription', type: 'string'},
            ],
        },
        ],
     },
    ],
}