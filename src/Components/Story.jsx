
let Images = [
    {
        image: 'Images/Profiles/LogoGatastico.png',
        name: 'Gatastico'
    },
    {
        image: 'Images/Profiles/LogoDoggie.jpg',
        name: 'Doggie'
    },
    {
        image: 'Images/Profiles/LogoHusky.jpg',
        name: 'ILoveHusky'
    },
    {
        image: 'Images/Profiles/LogoJuliano.jpg',
        name: 'Juliano'
    },
    {
        image: 'Images/Profiles/LogoLobo.jpg',
        name: 'Lobo'
    },
    {
        image: 'Images/Profiles/LogoMeuLoto.jpeg',
        name: 'MeuLoro'
    },
    {
        image: 'Images/Profiles/Miaugnifico.jpg',
        name: 'Miaugnifico'
    },
    {
        image: 'Images/Profiles/LogoOrca.jpg',
        name: 'Orca'
    },
    {
        image: 'Images/Profiles/LogoTatuDoBem.jpg',
        name: 'TatuDoBem'
    }
]

export default function Story(){
    return (
        Images.map((story) => {
            return(
                <div className="Story">
                    <img src={story.image} className="StoryIMG" alt=""/>
                    <p className="NameStory">{story.name}</p>
                </div>
                )
        })
    )
}