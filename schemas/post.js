export default {
    name: 'post',
    type: 'document',
    title: 'Blog Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            title: 'Body', 
            name: 'body',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: "Date",
            name: 'creationdate',
            type: 'datetime',

        }
    ],
    initialValue: {
        creationdate: Date.now()
    }

}