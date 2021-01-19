import { City } from './City.js'
import { useCity } from './CityDataProvider.js'

export const cityList = () => {
    
    const contentElement = document.querySelector(".cities")
    const cityListArray = useCity()

    let cityHTMLRepresentation = ""

    for(const city of cityListArray) {
        cityHTMLRepresentation += City(city)
    }
    
    contentElement.innerHTML += `
    <article>
        ${cityHTMLRepresentation}
    </article>`


}

