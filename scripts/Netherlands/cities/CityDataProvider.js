const cityCollection = [
    {
        image: "https://www.google.com/search?q=Amsterdam+pic&sxsrf=ALeKk03OkSlnuXlgFQiJzECVNfgrY9vKHA:1611079098748&tbm=isch&source=iu&ictx=1&fir=C_OSlduAZlMltM%252Chc90SUSu3XJpWM%252C_&vet=1&usg=AI4_-kSv75B0Gvh0HqFev7YcQ5ulSXnqhw&sa=X&ved=2ahUKEwj75oqryajuAhXLzVkKHR6mDxsQ9QF6BAgQEAE#imgrc=C_OSlduAZlMltM",
        name: "Amsterdam"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/8/8f/Den_Haag_Scheveningen_Kurhaus_02.jpg",
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