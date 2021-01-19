const landmarkCollection = [
    {
        image: "",
        name: "Imperial Palace"
    },
    {
        image: "",
        name: "Osaka Palace"
    },
    {
        image: "",
        name: "Fushimi Castle"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}
console.log("it works")