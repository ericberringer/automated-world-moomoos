import { useLandmark } from './LandmarkDataProvider.js'
import { Landmarks } from './Landmarks.js'

export const landmarkList = () => {
    const contentElement = document.querySelector(".landmarks")
    const landmarkListArray = useLandmark()
}

    let landmarkHTMLRepresentation = ""
    for(const landmark of landmarkListArray) {
        
    }