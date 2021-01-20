const celebrityCollection = [
    {
        image: "images/SeanConnery.jpg",
        name: "Sean Connery"
    },
    {
        image: "images/RobbieColtraneImage.jpg",
        name: "Robbie Coltrane"
    },
    {
        image: "images/AllyMcoistImage.jpg",
        name: "Ally McCoist"
    },
]

export const useCelebrity = () => {
    return celebrityCollection.slice()
}