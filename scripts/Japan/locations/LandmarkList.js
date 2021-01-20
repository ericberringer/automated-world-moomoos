import {useLandmark} from "./LandmarkDataProvider.js"
import {Landmark} from "./Landmark.js"

export const LandmarkList = () => {
    const contentElement = document.querySelector(".landmark")
    const landmarkListArray = useLandmark()
    

    let landmarkHTMLRepresentation = ""
    for (const city of LandmarkListArray) {
    landmarkHTMLRepresentation += Landmark(landmark)
    }
    // console.log(landmarkHTMLRepresentation)

    contentElement.innerHTML +=
    `<section class="cities countryArticles">${landmarkHTMLRepresentation}</section>
    `
}