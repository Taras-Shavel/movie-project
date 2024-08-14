const baseURL = 'https://api.themoviedb.org/3'
const baseUrlPhoto = 'https://image.tmdb.org/t/p/w500'

const discover = '/discover/movie'
const urls = {
    discover: {
        discover,
        byId:(id: number)=> `/movie/${id}`
    },
    genres: '/genre/movie/list',
    videos:(id: number) => `/movie/${id}/videos`,
    credits:(id: number) => `/movie/${id}/credits`,
    images:(id: number) => `/movie/${id}/images`,
    recommendations:(id: number) => `/movie/${id}/recommendations`
}
export {
    baseURL,
    baseUrlPhoto,
    urls
}










