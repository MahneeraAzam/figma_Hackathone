export default {
    title: 'Unique Features',
    name: 'uniqueFeatures',
    type: 'object',
    fields: [
        {
            title: 'Unique Features',
            name: 'uniqueFeatures',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {title: 'Unique Features Image', name: 'uniqueFeaturesImg', type: 'image', },
                        {title: 'Unique Features Heading', name: 'uniqueFeaturesHeading', type: 'string', },
                        {title: 'Unique Features Price', name: 'uniqueFeaturesPrice', type: 'number', },
                    ]
                }
            ]
        }
    ]
}