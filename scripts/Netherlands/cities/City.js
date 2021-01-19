export const City = (city) => {
    return `
    <p class="city__name">${city.name}</p>
    <img src="${city.image}" alt="cityImage" "class=cityImg" width="100px" height="100px">
    `
}