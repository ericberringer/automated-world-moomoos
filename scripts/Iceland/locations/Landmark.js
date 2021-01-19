export const Landmark = (landmark) => {
    return `
        <img src=${landmark.image}>
        <p>${landmark.name}</p> 
    `
}