const landmarkCollection = [
    {
        image: "images/StirlingCastleImage.jpg",
        name: "Stirling Castle"
    },
    {
        image: "images/TheKelpiesImage.jpeg",
        name: "The Kelpies"
    },
    {
        image: "images/GlenfinnViaImage.jpg",
        name: "Glenfinnan Viaduct"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}