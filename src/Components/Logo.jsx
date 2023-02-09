// import LogoImage from "./../../public/Images/LogoImage";
// import { LogoImage } from '';

export default function Logo(){
    return (
        <div className="Logo">
            <a href="http://localhost:3000" >
                <img src="Images/LogoImg.png" className="LogoImg" alt="Imagem simbolo do instagram" />
            </a>
            <a href="http://localhost:3000" >
                <img src="Images/logo.png" className="LogoName" alt="Nome simbolo do instagram"/>
            </a>
        </div>
    );
}