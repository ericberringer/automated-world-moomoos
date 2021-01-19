import {useCity} from './CityDataProvider.js'
import {City} from './City.js'


// exporting function to main.js and looping through array in LocationDAtaProvider 
export const cityList = () => {
    const contentElement = document.querySelector (".countryArticles")
    const  cityListArray= useCity ()
    let cityHTMLRep = ""
    for (const city of cityListArray) {
        cityHTMLRep += City(city)
        
    }
// conent Element
    contentElement.innerHTML +=
        `
        <div class="cities">
            ${cityHTMLRep}
        </div>
    `
}