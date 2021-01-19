import {useCity} from "./CityDataProvider.js"
import {City} from "./City.js"

export const cityList = () => {
    const contentElement = document.querySelector(".cities")
    const cityListArray = useCity()
    

    let cityHTMLRepresentation = ""
    for (const city of cityListArray) {
    cityHTMLRepresentation +=City(city)
    }
    // console.log(cityHTMLRepresentation)

    contentElement.innerHTML +=
    `<section class="cities countryArticles">${cityHTMLRepresentation}</section>
    `
}