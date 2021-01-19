export const Landmarks = (landmark) => {
    return `
    <p class="city__name">${landmark.name}</p>
    <img src="${landmark.image}" alt="cityImage" "class=landmarks" width="300px" height="200px">
    `
}