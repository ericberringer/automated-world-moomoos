export const Landmark = (landmark) => {
    return `
    <img class="countryFactsImage" src="${landmark.image}">
        <h3 class="landmarks countryArticles">${landmark.name}</h3>            
                `
}