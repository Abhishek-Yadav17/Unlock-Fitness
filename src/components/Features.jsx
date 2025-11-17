import React from 'react'
import '../styles/Features.scss'

const Features = () => {

    const featuresData = [
        {
            id: 1,
            img: "/images/focus1.png",
            title: "STRENGTH",
            desc: `Build power that carries beyond the gym.
Train with intent, move with confidence
And your body will become your greatest asset.`,
        },
        {
            id: 2,
            img: "/images/focus3.png",
            title: "LOGEVITY",
            desc: `Train for the big picture stuff.
A fitness regime sculpted by resilience and balance to seize the life you want.`,
        },
        {
            id: 3,
            img: "/images/focus2.png",
            title: "ENDURANCE",
            desc: `The real win is to outlast the challenge. Let consistency become your strongest habit For your potential to grow with every session.`,
        },
        {
            id: 4,
            img: "/images/focus4.png",
            title: "FOCUS",
            desc: `Clarity in motion, intent in every session. Every movement has meaning, every session counts to achieve conscious growth.`,
        },
    ]

    return (
        <main className='features'>
            <div className="features-heading">
                <p>Focus Area</p>
                <h1>UNLOCK YOUR <br /> BEST S.E.L.F</h1>
            </div>

            <div className="features-content">
                <div className="features-inner">
                    {featuresData.slice(0, 2).map(f => (
                        <div className="elem" key={f.id}>
                            <img src={f.img} alt={f.title} />
                            <div className="box">
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="features-inner">
                    {featuresData.slice(2, 4).map(f => (
                        <div className="elem" key={f.id}>
                            <img src={f.img} alt={f.title} />
                            <div className="box">
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Features