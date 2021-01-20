import { Celebrity } from './Celebrities.js'
import { useCelebrity } from './CelebritiesDataProvider.js'

export const celebritiesList = () => {

    const contentElement = document.querySelector(".famousCitizens")
    const celebrityListArray = useCelebrity()

    let celebrityHTMLRepresentation = ""
    for(const celebrity of celebrityListArray) {
        celebrityHTMLRepresentation += Celebrity(celebrity)
    }

    contentElement.innerHTML +=
    `
    <article>
        ${celebrityHTMLRepresentation}
    </article>
    `
}