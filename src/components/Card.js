export default function Card() {
    return (
        <div className="card--container">
            <div className="card">
                <div className="card--right">
                    <img src="./images/img-1.png" alt="img" />
                </div>
                <div className="card--left">
                    <div className="card--location">
                        <img src="./images/location.png" alt="location" />
                        <h2>JAPAN</h2>
                        <a href="location">View on Google Maps</a>
                    </div>
                    <h3 className="card--title">Mount Fuji</h3>
                    <p className="card--date">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className="card--desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
            <hr />
        </div>
    )
}