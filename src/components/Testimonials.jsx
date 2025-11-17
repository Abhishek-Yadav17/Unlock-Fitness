import React, { useRef } from 'react'
import '../styles/Testimonials.scss'

const Testimonials = () => {

    const scrollRef = useRef(null)

    const testimonials = [
        {
            key: 1,
            img: "/images/client1.png",
            name: "Soumi Dey Sarkar (42)",
            since: "May 2020",
        },
        {
            key: 2,
            img: "/images/client2.png",
            name: "Deepak Gopalakrishnan (41)",
            since: "May 2021",
        },
        {
            key: 3,
            img: "/images/client3.png",
            name: "Aksh (28)",
            since: "Since January 2024",
        },
        {
            key: 4,
            img: "/images/client4.png",
            name: "Asma Ayub (41)",
            since: "May 2021",
        },
        {
            key: 5,
            img: "/images/client4.png",
            name: "Asma Ayub (41)",
            since: "May 2021",
        },
        {
            key: 6,
            img: "/images/client4.png",
            name: "Asma Ayub (41)",
            since: "May 2021",
        },
    ]

    const scrollLeft = () => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
    const scrollRight = () => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })

    return (
        <main className='testimonials'>
            <div className="testimonials-heading">
                <p>Client Reviews</p>
                <div className="heading">
                    <h1>WHAT PEOPLE <br /> SAY ABOUT US</h1>

                    <div className="nav-btns">
                        <button onClick={scrollLeft}><img src="/images/arrow6.png" alt="arrow" /></button>
                        <button onClick={scrollRight}><img src="/images/arrow.png" alt="arrow" /></button>
                    </div>
                </div>
            </div>
            <div className="testimonials-content" ref={scrollRef}>
                {testimonials.map(item => (
                    <div className="testimonial-card" key={item.key}>
                        <div className="test-card-inner">
                            <img src={item.img} alt="client" />
                            <div className="overlay">
                                <h4>{item.name}</h4>
                                <p>Since <strong>{item.since}</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Testimonials