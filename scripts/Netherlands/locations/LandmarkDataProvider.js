const landmarkCollection = [
    {
        image: "https://dominik-photography.com/wp-content/uploads/2017/01/03-Amsterdam-by-DOMINIK-PHOTOGRAPHY.jpg",
        name: "Keukenhof"
    },
    {
        image:"https://besthqwallpapers.com/img/original/59776/the-hague-evening-city-panorama-modern-buildings-skyscrapers.jpg",
        name: "Rijksmuseum"
    },
    {
        image: "https://image.shutterstock.com/image-photo/water-reflection-traditional-dutch-building-260nw-1096266548.jpg",
        name: "Heineken Experience"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice
}
