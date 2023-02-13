let sugestions = [
    {Image:"assets/Profiles/LogoJuliano.jpg", name:"MacacoJuliano", status:"Segue Você"},
    {Image:"assets/Profiles/LogoOrca.jpg", name:"Institudo Orca", status:"Segue Você"},
    {Image:"assets/Profiles/LogoLobo.jpg", name:"SantuarioLobo", status:"Segue Você"},
    {Image:"assets/Profiles/LogoMeuLoro.jpeg", name:"GeraldoPapagaio", status:"Segue Você"},
    {Image:"assets/Profiles/LogoTatuDoBem.jpg", name:"TatuDoBem", status:"Segue Você"}
    ]

export default function Sugestao(){
    return (
        sugestions.map((sugest) => {
            return(
                <div class="SugestionBox">
                    <div class="Acount">
                        <img class="ImgSugestion" src={sugest.Image} alt="" />
                        <div class="Address">
                            <p class="Profile">{sugest.name}</p>
                            <p class="Name">{sugest.status}</p>
                        </div>
                    </div>
                    <p class="Follow">Seguir</p>
                </div>
            )
        })
    )
}