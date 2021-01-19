export const City = (city) => {
    return `
    <div class="cities">
    <p class="city__image">${city.image}</p>
    <p class="city__name">${city.name}</p>
    <img src="${city.image}" alt="cityImage" "class=cityImg" width="100px" height="100px">
    `
}