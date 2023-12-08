const baseURL = 'https://api.themoviedb.org/3'

const discover = '/discover/movie'
const urls = {
    discover: {
        discover,
        byId:(id: number)=> `/movie/${id}`
    },
    genres: '/genre/movie/list',
    videos:(id: number) => `/movie/${id}/videos`
}
export {
    baseURL,
    urls
}