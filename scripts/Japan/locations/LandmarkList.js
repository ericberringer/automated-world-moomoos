import {useLandmark} from "./LandmarkDataProvider.js"
import {Landmark} from "./Landmark.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".landmarks")
    const landmarkListArray = useLandmark()
    

    let landmarkHTMLRepresentation = ""
    for (const landmark of landmarkListArray) {
    landmarkHTMLRepresentation += Landmark(landmark)
    }
    // console.log(landmarkHTMLRepresentation)

    contentElement.innerHTML +=
    `
    <section class="landmarks countryArticles">
    ${landmarkHTMLRepresentation}
    </section>
    ` 
}