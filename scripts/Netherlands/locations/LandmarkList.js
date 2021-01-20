import { Landmarks } from './Landmarks.js'
import { useLandmark } from './LandmarkDataProvider.js'

export const landmarkList = () => {
    const contentElement = document.querySelector(".landmarks")
    const landmarkListArray = useLandmark()
    let landmarkHTMLRepresentations = ""

    for (const landmark of landmarkListArray) {
        landmarkHTMLRepresentations += Landmarks(landmark)
    }

    contentElement.innerHTML += `
    <article class="countryArticles">
    ${landmarkHTMLRepresentations}
    </article>
    `
}