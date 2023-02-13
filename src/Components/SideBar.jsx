import Usuario from "./Usuario"

export default function SideBar(){
    return(
        <div class="SidebarBox">
            <div class="UpSideBox">
            <Usuario image="assets/Profiles/LogoMiaugnifico.jpg"  user="Miaugnifico" name="MeuGato"/>
            </div>
            <div class="Sugestion">
                <p class="SideSugestions">Sugestões para você</p>
                <p class="Vertudo">Ver Tudo</p>
            </div>
            <div class="SugestionBox">
                <div class="Acount">
                    <img class="ImgSugestion" src="../assets/Profiles/LogoJuliano.jpg" alt=""/>
                    <div class="Address">
                        <p class="Profile">MacacoJuliano</p>
                        <p class="Name">Segue Você</p>
                    </div>
                </div>
                <p class="Follow">Seguir</p>
            </div>
            <div class="SugestionBox">
                <div class="Acount">
                    <img class="ImgSugestion" src="../assets/Profiles/LogoOrca.jpg" alt=""/>
                    <div class="Address">
                        <p class="Profile">Institudo Orca</p>
                        <p class="Name">Segue Você</p>
                    </div>
                </div>
                <p class="Follow">Seguir</p>
            </div>
            <div class="SugestionBox">
                <div class="Acount">
                    <img class="ImgSugestion" src="../assets/Profiles/LogoLobo.jpg" alt=""/>
                    <div class="Address">
                        <p class="Profile">SantuarioLobo</p>
                        <p class="Name">Segue Você</p>
                    </div>
                </div>
                <p class="Follow">Seguir</p>
            </div>
            <div class="SugestionBox">
                <div class="Acount">
                    <img class="ImgSugestion" src="../assets/Profiles/LogoMeuLoro.jpeg" alt=""/>
                    <div class="Address">
                        <p class="Profile">GeraldoPapagaio</p>
                        <p class="Name">Segue Você</p>
                    </div>
                </div>
                <p class="Follow">Seguir</p>
            </div>
            <div class="SugestionBox">
                <div class="Acount">
                    <img class="ImgSugestion" src="../assets/Profiles/LogoTatuDoBem.jpg" alt=""/>
                    <div class="Address">
                        <p class="Profile">TatuDoBem</p>
                        <p class="Name">Segue Você</p>
                    </div>
                </div>
                <p class="Follow">Seguir</p>
            </div>
            <div class="Infos">
                <br/>
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma</p>
            </div>
            <div class="Infos">
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}