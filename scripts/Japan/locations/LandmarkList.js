import {useLandmark} from "./LandmarkDataProvider.js"
import {Landmark} from "./Landmark.js"

export const LandmarkList = () => {
    const contentElement = document.querySelector(".landmark")
    const landmarkListArray = useCity()
    

    let landmarkHTMLRepresentation = ""
    for (const city of LocationListArray) {
    landmarkHTMLRepresentation += Landmark(landmark)
    }
    // console.log(landmarkHTMLRepresentation)

    contentElement.innerHTML +=
    `<section class="cities countryArticles">${landmarkHTMLRepresentation}</section>
    `
}