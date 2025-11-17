import React from 'react'
import '../styles/Updates.scss'

const Updates = () => {

    const updatesData = [
        { id: 1, img: "/images/update1.png" },
        { id: 2, img: "/images/update2.png" },
        { id: 3, img: "/images/update3.png" },
    ]

    return (
        <div className="updates">
            <div className="updates-heading">
                <p>Updates</p>
                <h1>JOIN THE UNLOCK <br /> COLLECTIVES</h1>
            </div>
            <div className="updates-cards">
                {updatesData.map(item => (
                    <div className="update-card" key={item.id}>
                        <img src={item.img} alt="update" />
                    </div>
                ))}
            </div>
            <img src="/images/arrow4.png" alt="arrow" />
            <div className="updates-bottom"></div>
        </div>
    )
}

export default Updates