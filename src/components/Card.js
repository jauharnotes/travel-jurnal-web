export default function Card(props) {
    return (
        <div className="card--container">
            <div className="card">
                <div className="card--right">
                    <img src={props.item.coverImg} alt="img" />
                </div>
                <div className="card--left">
                    <div className="card--location">
                        <img src="./images/location.png" alt="location" />
                        <h2>{props.item.location.toUpperCase()}</h2>
                        <a href="location">{props.item.maps}</a>
                    </div>
                    <h3 className="card--title">{props.item.title}</h3>
                    <p className="card--date">{props.item.date}</p>
                    <p className="card--desc">{props.item.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}