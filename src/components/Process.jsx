import React from 'react'
import '../styles/Process.scss'

const Process = () => {

    const processData = [
        {
            id: 1,
            img: "/images/feature6.png",
            title: "No fluff. \nOnly a simple, clear intent.",
            desc: `Our programming is clear.
            Designed for anyone, anywhere.
            No confusion, just progress.
            This is the simple, effective way.`,
        },
        {
            id: 2,
            img: "/images/feature4.png",
            title: "Together, we push.",
            desc: `Feel the electric vibe. A powerful sense
            of oneness. You belong here.
            Experience true accomplishment. Every
            session, together.`,
        },
        {
            id: 3,
            img: "/images/feature3.png",
            title: "Our foundation? \nYears in the making.",
            desc: `We don't guess. Our methods come from coaches forged in elite disciplines. Years in powerlifting, Olympic lifting,   and endurance training. This is a proven pedigree. It's how we guide your path.`,
        },
        {
            id: 4,
            img: "/images/feature5.png",
            title: "Gather with us",
            desc: `Meet your people. Connect with coaches.
            Discover new activities.
            Shared movement and true connection.
            All you need to fuel this journey.`,
        },
    ]

    return (
        <main className='process'>
            <div className="process-heading">
                <p>How we work</p>
                <h1>PROVEN BEYOND <br /> THEORY. <br /> THIS IS LIVED</h1>
                <h1>experience</h1>
            </div>
            <div className="process-content">
                <div className="process-inner">
                    {processData.slice(0, 2).map(item => (
                        <div className="elem" key={item.id}>
                            <img src={item.img} alt="feature" />
                            <div className="box">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="process-mid">
                    <h5>HOW WE</h5>
                    <h4>WORK</h4>
                    <h2>@unlock</h2>
                </div>
                <div className="process-inner">
                    {processData.slice(2, 4).map(item => (
                        <div className="elem" key={item.id}>
                            <img src={item.img} alt="feature" />
                            <div className="box">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Process