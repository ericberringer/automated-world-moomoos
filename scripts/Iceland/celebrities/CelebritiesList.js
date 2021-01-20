import {Celebrities} from './Celebrities.js'
import {useCelebrities} from './CelebritiesDataProvider.js'

export const celebrityList = () => {
    const contentElement = document.querySelector (".famousCitizens")
    const  celebrityListArray= useCelebrities()
    let celebHTMLRep = ""
    for (const celebrity of celebrityListArray) {
        celebHTMLRep += Celebrities(celebrity)
        
    }
// content Element
    contentElement.innerHTML +=
        `
        <div class="cities">
            ${celebHTMLRep}
        </div>
    `
}