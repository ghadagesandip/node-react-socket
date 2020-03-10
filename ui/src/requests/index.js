
const Api = { 
    fetchMessages: () => {
        return Promise.resolve([
            {
                user:'Sandip',
                message:'hello Santosh'
            },
            {
                user:'Santosh',
                message:'hey Sandip'
            }
        ])
    }
};

export default Api;