import React from 'react'
import '../styles/Schedules.scss'

const Schedules = () => {

    const schedulesData = [
        {
            id: 1,
            date: "24 Oct, 2025",
            time: "6.30 PM - 8.00 PM",
            day: "Monday",
            title: "Introduction to breathing",
            desc: "Introduction to breathing",
        },
        {
            id: 2,
            date: "03 Nov, 2025",
            time: "6.30 PM - 8.00 PM",
            day: "Wednesday",
            title: "The right way to do pilates",
            desc: "Introduction to breathing",
        },
        {
            id: 3,
            date: "16 Nov, 2025",
            time: "6.30 PM - 8.00 PM",
            day: "Monday",
            title: "The science behind losing weight",
            desc: "Introduction to breathing",
        },
    ]

    return (
        <main className='schedules'>
            <div className="schedules-heading">
                <p>Schedules</p>
                <h1>ITS TIME TO COMMIT. <br /> PLAN IT. OWN IT.</h1>
            </div>
            <div className="shape">
                <h4>SAVE THE DATE <br /> FOR UPCOMING <br /> EVENTS</h4>
                <p>Our programs are simple, flexible, and sustainable, designed to help you show up consistently.</p>
                <button>SEE ALL EVENTS <img src="/images/arrow.png" alt="arrow" /></button>
            </div>
            <div className="schedules-content">
                {schedulesData.map(item => (
                    <div className="schedule-box" key={item.id}>
                        <div className="sb-left">
                            <h4>{item.date}</h4>
                            <p>{item.time} <span>{item.day}</span></p>
                        </div>

                        <div className="sb-right">
                            <div className="sb-inner">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                            <button>Book now <img src="/images/arrow3.png" alt="arrow" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Schedules