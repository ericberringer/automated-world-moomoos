const cityCollection = [
    {
        image: "",
        name: "Tokyo",
    },
    {
        image: "",
        name: "Osaka",
    },
    {
        image: "",
        name: "Kyoto",
    }
]

export const useCity = () => {
    return cityCollection.slice()
}