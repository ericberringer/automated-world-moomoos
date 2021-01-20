import { Celebrities } from './Celebrities.js'
import { useCelebrity } from './CelebritiesDataProvider.js'

export const celebrityList = () => {
    const contentElement = document.querySelector(".famousCitizens")
    const celebrityListArray = useCelebrity()

    let celebrityHTMLRepresentations = ""

    for (const celebrity of celebrityListArray) {
        celebrityHTMLRepresentations += Celebrities(celebrity)
    }

    contentElement.innerHTML += `
    <article class="countryArticles">
    ${celebrityHTMLRepresentations}
    </article>
    `
}