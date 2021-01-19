const cityCollection = [
    {
        image: "https://www.wallpaperbetter.com/wallpaper/814/948/49/amsterdam-high-res-image-2K-wallpaper-middle-size.jpg",
        name: "Amsterdam"
    },
    {
        image:"https://besthqwallpapers.com/img/original/59776/the-hague-evening-city-panorama-modern-buildings-skyscrapers.jpg",
        name: "The Hague"
    },
    {
        image: "https://image.shutterstock.com/image-photo/water-reflection-traditional-dutch-building-260nw-1096266548.jpg",
        name: "Arnhem"
    }

   
]

export const useCity = () => {
    return cityCollection.slice()
}