export const City = (city) => {
    return `
    <p class="city__name">${city.name}</p>
    <img src="${city.image}" alt="cityImage" "class=cityImg" width="300px" height="200px">
    `
}