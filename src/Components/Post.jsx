

let Posts = [
    {
        profile: "Images/Profiles/LogoMiaugnifico.jpg",
        name: "Miaugnifico",
        link: "http://localhost:3000",
        image: "Images/imagem-de-gatinho-fofo.jpg", 
        liker: "Images/Profiles/LogoGatastico.png"
    },
    {
        profile: "Images/Profiles/LogoGatastico.png",
        name: "Gatastico",
        link: "http://localhost:3000",
        image: "Images/ComoGato.jpeg", 
        liker: "Images/Profiles/LogoMiaugnifico.jpg"
    },
    {
        profile: "Images/Profiles/LogoHusky.jpg",
        name: "ILoveHusky",
        link: "http://localhost:3000",
        image: "Images/siberian_husky_cute_puppies.jpg", 
        liker: "Images/Profiles/LogoGatastico.png"
    },
    {
        profile: "Images/Profiles/LogoDoggie.jpg",
        name: "Doggie",
        link: "http://localhost:3000",
        image: "Images/photo-1615751072497-5f5169febe17.jpeg", 
        liker: "Images/Profiles/LogoGatastico.png"
    }
]

export default function Post(){
    return(
        Posts.map((post) => {
            return(
                <div className="PostBox">
                    <div className="PostUp">
                            <img src={post.profile} className="PostLogo" alt=""/>
                            <div className="PostTextUp">
                                <span>
                                    <a href={post.link}>
                                        <p>
                                            {post.name}
                                        </p>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="PostContent">
                            <img src={post.image} className="ImagePost" alt="" />
                        </div>
                        <div className="PostBotton">
                            <img src="../Images/coracao.png" className="iconsPost" alt="Simbolo de Like"/>
                            <img src="../Images/bate-papo.png" className="iconsPost" alt="Simbolo de Bate-Papo"/>
                            <img src="../Images/instagram-direto.png" className="iconsPost" alt="Simbolo de Direct"/>
                            <img src="../Images/salvar-instagram.png" className="iconsPost" alt="Simbolo de Salvar"/>
                        </div>
                        <div className="PostBotton">
                            <img src={post.liker} className="Liker" alt=""/>
                            <span className="PostReview"> curtido por <strong>Gatastico</strong> e <strong> outras 2.500 pessoas</strong></span>
                        </div>
                </div>
                )})
    )
}
