const baseURL = 'https://api.themoviedb.org/3'

const discover = '/discover'
const account = '/account'
const urls = {
    discover:{
        discover,
        movie: '/movie',
    },
    account:{
        account,
        byId: (id:number):string => `${account}/${id}`,
        list: '/list'
    }
}
export {
    baseURL,
    urls
}