
let Images = [
    {
        image: 'assets/Profiles/LogoGatastico.png',
        name: 'Gatastico'
    },
    {
        image: 'assets/Profiles/LogoDoggie.jpg',
        name: 'Doggie'
    },
    {
        image: 'assets/Profiles/LogoHusky.jpg',
        name: 'ILoveHusky'
    },
    {
        image: 'assets/Profiles/LogoJuliano.jpg',
        name: 'Juliano'
    },
    {
        image: 'assets/Profiles/LogoLobo.jpg',
        name: 'Lobo'
    },
    {
        image: 'assets/Profiles/LogoMeuLoro.jpeg',
        name: 'MeuLoro'
    },
    {
        image: 'assets/Profiles/LogoMiaugnifico.jpg',
        name: 'Miaugnifico'
    },
    {
        image: 'assets/Profiles/LogoOrca.jpg',
        name: 'Orca'
    },
    {
        image: 'assets/Profiles/LogoTatuDoBem.jpg',
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