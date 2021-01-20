import {useCelebrity} from "./CelebritiesDataProvider.js"
import {Celebrity} from "./Celebrities.js"

export const celebrityList = () => {
    const contentElement = document.querySelector(".celebrities")
    const celebrityListArray = useCelebrity()
    

    let celebrityHTMLRepresentation = ""
    for (const city of celebrityListArray) {
    celebrityHTMLRepresentation +=Celebrity(celebrity)
    }
    // console.log(celebrityHTMLRepresentation)

    contentElement.innerHTML +=
    `<section class="famousCitizens countryArticles">${celebrityHTMLRepresentation}</section>
    `
}