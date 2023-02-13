import { useState } from "react";

export default function Usuario(props) {
    const image = props.image;
    const [user, setUser] = useState(props.user);

    return (
        <div className="UpSideBox">
            <img className="SideBoxImg" src={image} alt="" data-test="profile-image"/>
            <div className="ProfileName" data-test="name">
                <p>
                    {user}
                </p>
            </div>
            <img className="edit" src="assets/edit.png" alt="" data-test="edit-name" onClick={() => setUser(prompt("Digite o novo nome"))}></img>
        </div>
    )
}

