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
            type: 'markdown'
        },
        {
            title: "Date",
            name: 'creationdate',
            type: 'datetime',
        },
        {
            title: "Handle",
            name: 'handle',
            type: 'string'
        }
    ],
    initialValue: {
        creationdate: new Date(Date.now()).toISOString()
    }

}