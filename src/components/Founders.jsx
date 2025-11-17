import React from 'react'
import '../styles/Founders.scss'

const Founders = () => {

    const foundersData = [
        {
            id: 1,
            img: "/images/founder1.png",
            name: "Shivani",
            role: "Strength Trainer.",
            exp: "5 yrs Experience"
        },
        {
            id: 2,
            img: "/images/founder2.png",
            name: "Kunal",
            role: "Strength Trainer.",
            exp: "5 yrs Experience"
        },
        {
            id: 3,
            img: "/images/founder3.png",
            name: "Anjny",
            role: "CrossFit L1 coach,",
            exp: "newly turned Hyrox addict"
        }
    ]

    return (
        <main className='founders'>
            <div className="founders-top">
                <div className="founders-heading">
                    <p>Founder's Profile</p>
                    <h1>MEET THE MINDS <br /> AND MUSCLES</h1>
                </div>
                <img src="/images/star2.png" alt="star" />
            </div>
            <div className="founders-bottom">
                <div className="founders-card">
                    {foundersData.map(f => (
                        <div className="card" key={f.id}>
                            <img src={f.img} alt={f.name} className="card-img" />
                            <div className="card-info">
                                <h3>{f.name}</h3>
                                <p>{f.role} <span>{f.exp}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Founders