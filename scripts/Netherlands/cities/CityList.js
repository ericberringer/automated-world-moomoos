import { City } from './City.js'
import { useCity } from './CityDataProvider.js'

export const cityList = () => {
    const contentElement = document.querySelector(".countryArticles")
    const cityListArray = useCity()
    let cityHTMLRepresentations = ""
    
   for  (const city of cityListArray) {
       cityHTMLRepresentations += City(city)
   }

   contentElement.innerHTML += `
   <article class="cities">
   ${cityHTMLRepresentations}
   </article>
   `
  
}