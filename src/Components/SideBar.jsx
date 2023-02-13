import Sugestao from "./Sugestao"
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
            
            <Sugestao/>

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