const cityCollection = [
    {
        image:"https://cdn.audleytravel.com/700/499/79/15975972-reykjavk.jpg alt='View of Reykjavik'",
        name: "Reykjavík (Capital of Iceland)"
    },
    {
        image:"https://cdn.tourradar.com/s3/tour/1500x800/99897_46368406.jpg alt='City view of Akureyri'",
        name: "Akureyri"
    },
    {
        image:"https://guidetoiceland.imgix.net/421585/x/0/hafnarfjordur-is-part-of-the-greater-reykjavik-area.jpg alt='City view Hafnarfjorour'",
        name: "Hafnarfjörður"
    }
]


export const useCity = () => {
    return cityCollection.slice()
}
