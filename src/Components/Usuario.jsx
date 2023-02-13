

export default function Usuario(props) {
    const image = props.image;
    const username = props.username;
    const name = props.name;

    return (
        <div className="user">
            <img src={image} alt="" />
            <div className="texto">
                <strong>
                    {username}
                </strong>
                {name}
            </div>
        </div>
    )
}