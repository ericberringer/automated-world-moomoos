const landmarkCollection = [
    {
        image:"https://t0.gstatic.com/images?q=tbn:ANd9GcRg2VW8BqpQIgOuEQ_Ef-530x546fBZMlrvJ6cWzxMXMp6ZwYAMxv-PCiKtJmu3cVZWXUbDFk_iTg3An1HgjgepAw",
        name: "Geysir"
    },
    {
        image:"https://i.ytimg.com/vi/MEWKKRzx0c0/maxresdefault.jpg",
        name: "The Blue Lagoon"
    },
    {
        image:"https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/8d/c3.jpg",
        name: "Skaftafell Ice Cave, Vatnajökull National Park"
    }
]


export const useLandmark = () => {
    return landmarkCollection.slice()
}