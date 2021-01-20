const celebrityCollection = [
    {
        image:"https://cdn.britannica.com/43/103043-050-1C637E5D/Bjork-opening-ceremony-Athens-2004-Olympic-Games-2004.jpg alt='Singer Bjork'",
        name: "Björk (singer-songwriter)"
    },
    {
        image:"https://tmssl.akamaized.net/images/foto/normal/gylfi-sigurdsson-everton-1538385375-18000.jpg alt='Gylfi Sigurðsson (Icelandic soccer player)'",
        name: "Gylfi Sigurðsson (Icelandic soccer player)"
    },
    {
        image:"https://guidetoiceland.imgix.net/343356/x/0/omam-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4 alt='Of Monsters and Men (Rock band)'",
        name: "Of Monsters and Men (Rock band)"
    }
]


export const useCelebrities = () => {
    return celebrityCollection.slice()
}