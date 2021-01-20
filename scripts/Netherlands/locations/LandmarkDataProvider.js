const landmarkCollection = [
    {
        image: "https://dominik-photography.com/wp-content/uploads/2017/01/03-Amsterdam-by-DOMINIK-PHOTOGRAPHY.jpg",
        name: "Keukenhof"
    },
    {
        image:"https://ak.picdn.net/shutterstock/videos/5858987/thumb/1.jpg",
        name: "Rijksmuseum"
    },
    {
        image: "https://image.shutterstock.com/image-photo/amsterdam-netherlands-jun-3-2015-260nw-288464270.jpg",
        name: "Heineken Experience"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}

