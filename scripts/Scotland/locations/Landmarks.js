export const Landmarks = (landmark) => {
    return `
    <img class="countryFactsImage" src="${landmark.image}">
    <p>${landmark.name}</p>
    `
}