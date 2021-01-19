const cityCollection = [
    {
        image: "images/St.AndrewsImage.jpg",
        name: "St. Andrews"
    },
    {
        image: "images/EdinburghImage.jpg",
        name: "Edinburgh"
    },
    {
        image: "images/DundeeImage.jpg",
        name: "Dundee"
    }
]

export const useCity = () => {
    return cityCollection.slice()
}

