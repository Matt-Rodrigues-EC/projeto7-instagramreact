import { useState } from "react"

let Posts = [
    {
        profile: "assets/Profiles/LogoMiaugnifico.jpg",
        name: "Miaugnifico",
        link: "http://localhost:3000",
        image: "assets/imagem-de-gatinho-fofo.jpg", 
        liker: "assets/Profiles/LogoGatastico.png"
    },
    {
        profile: "assets/Profiles/LogoGatastico.png",
        name: "Gatastico",
        link: "http://localhost:3000",
        image: "assets/ComoGato.jpeg", 
        liker: "assets/Profiles/LogoMiaugnifico.jpg"
    },
    {
        profile: "assets/Profiles/LogoHusky.jpg",
        name: "ILoveHusky",
        link: "http://localhost:3000",
        image: "assets/siberian_husky_cute_puppies.jpg", 
        liker: "assets/Profiles/LogoGatastico.png"
    },
    {
        profile: "assets/Profiles/LogoDoggie.jpg",
        name: "Doggie",
        link: "http://localhost:3000",
        image: "assets/photo-1615751072497-5f5169febe17.jpeg", 
        liker: "assets/Profiles/LogoGatastico.png"
    }
]



export default function Post(){

    const [cont, setCont] = useState(0);
    const [imgprofile, setImgProfile] = useState();

    return(
        Posts.map((post) => {
            return(
                <div className="PostBox" data-test="post">
                    <div className="PostUp">
                            <img src={imgprofile} className="PostLogo" alt="" data-test="post-image" onClick={() => {setImgProfile(prompt("Insira  anova URL."))}}/>
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
                            <img src={post.image} className="ImagePost" alt="" onClick={() => {setCont(cont + 1)}}/>
                        </div>
                        <div className="PostBottonIcons">
                            <div>
                                <img src="../assets/coracao.png" className="iconsPost" alt="Simbolo de Like" data-test="like-post" onClick={() => {}}/>
                                <img src="../assets/bate-papo.png" className="iconsPost" alt="Simbolo de Bate-Papo"/>
                                <img src="../assets/instagram-direto.png" className="iconsPost" alt="Simbolo de Direct"/>
                            </div>
                            <img src="../assets/salvar-instagram.png" className="iconsPost" alt="Simbolo de Salvar" data-test="save-post"/>
                        </div>
                        <div className="PostBotton">
                            <img src={post.liker} className="Liker" alt=""/>
                            <span className="PostReview" data-test="likes-number"> curtido por <strong>Gatastico</strong> e <strong> outras {cont} pessoas</strong></span>
                        </div>
                </div>
                )})
    )
}


