// get image from API with url, add posterpath at the end for exact route
const getImageWithUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

export default getImageWithUrl;