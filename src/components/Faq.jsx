import React, { useState } from 'react'
import '../styles/Faq.scss'

const Faq = () => {

    const [active, setActive] = useState(1)

    const faqData = [
        { id: 1, question: "How long are the workouts?", answer: "Feel the electric vibe. A powerful sense of oneness. You belong here. Experience true accomplishment. Every session, together." },
        { id: 2, question: "How long are the workouts?", answer: "Feel the electric vibe. A powerful sense of oneness. You belong here. Experience true accomplishment. Every session, together." },
        { id: 3, question: "How long are the workouts?", answer: "Feel the electric vibe. A powerful sense of oneness. You belong here. Experience true accomplishment. Every session, together." },
        { id: 4, question: "How long are the workouts?", answer: "Feel the electric vibe. A powerful sense of oneness. You belong here. Experience true accomplishment. Every session, together." },
        { id: 5, question: "How long are the workouts?", answer: "Feel the electric vibe. A powerful sense of oneness. You belong here. Experience true accomplishment. Every session, together." },
    ]

    const toggleFAQ = (id) => {
        setActive(active === id ? null : id)
    }

    return (
        <main className='faq'>
            <div className="faq-content">
                <div className="faq-left">
                    <h1>FAQS</h1>
                    <div className="faq-left-inner">
                        <h4>Your questions, answered</h4>
                        <p>Get clear answers to the most common questions, so you can focus on enjoying and progressing in your workouts.</p>
                    </div>
                </div>
                <div className="faq-right">
                    {faqData.map(item => (
                        <div className="faq-box" key={item.id}>
                            <div className="faq-box-inner">
                                <h4>{item.question}</h4>
                                <div className={`faq-answer ${active === item.id ? "open" : ""}`}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                            <i
                                className="ri-add-large-fill"
                                onClick={() => toggleFAQ(item.id)}
                            ></i>
                        </div>
                    ))}
                </div>
            </div>
            <img src="/images/arrow5.png" alt="arrow" />
        </main>
    )
}

export default Faq