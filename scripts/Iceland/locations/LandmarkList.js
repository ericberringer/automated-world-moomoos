import {Landmark} from './Landmark.js'
import {useLandmark} from './landmarkDataProvider.js'

export const landmarkList = () => {
    const contentElement = document.querySelector (".landmarks")
    const  landmarkListArray= useLandmark ()
    let landmarkHTMLRep = ""
    for (const landmark of landmarkListArray) {
        landmarkHTMLRep += Landmark(landmark)
        
    }
// conent Element
    contentElement.innerHTML +=
        `
        <div class="cities">
            ${landmarkHTMLRep}
        </div>
    `
}