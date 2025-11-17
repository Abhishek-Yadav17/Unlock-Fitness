import React from 'react'
import '../styles/About.scss'

const About = () => {
    return (
        <main className='about'>
            <div className="about-heading">
                <p>Programs Overview</p>
                <h1>OUR WFH <br />PROGRAMS <span><div className="green-dot"></div>Everything's Online</span></h1>
            </div>

            <div className="about-cards">
                <div className="card1">
                    <div className="tag">
                        <p>Muscle tone & maintenance</p>
                    </div>
                    <div className="card-inner">
                        <div className="card-title">
                            <h5>PRESENTING</h5>
                            <div>
                                <h4>SCULPT</h4>
                                <h4>30</h4>
                            </div>
                        </div>
                        <p>Our signature virtual training program. Get ready for 4 weeks of building strength, 4 weeks of mastering consistency, and 4 weeks of habits that are built to stay.</p>
                        <div className="about-features">
                            <h5>Key Features <img src="/images/feature1.png" alt="card" /></h5>
                            <ul>
                                <li>Strength, hypertrophy, and conditioning</li>
                            </ul>
                        </div>
                    </div>
                    <div className="batches">
                        <p>New batches starts on</p>
                        <div className="batches-box1">
                            <div className="box1-inner">
                                <h5>15 Sept, 2025</h5>
                                <h5>01 Oct, 2025</h5>
                                <h5>16 Oct, 2025</h5>
                            </div>
                            <h4>Enroll today <i class="ri-arrow-right-double-fill"></i></h4>
                        </div>
                        <div className="batches-box2">
                            <p>Join our daily live sessions at<strong> 7:00 AM IST.</strong> Live on <img src="/images/zoom2.png" alt="zoom" /></p>
                        </div>
                    </div>
                    <img src="/images/star.png" className='card-bg' alt="star" />
                    <img src="/images/feature-hero.png" className='card-hero' alt="card-hero" />
                </div>
                <div className="card2">
                    <div className="tag">
                        <p>Strength & base building</p>
                    </div>
                    <div className="card-inner">
                        <div className="card-title">
                            <h5>REMOTE</h5>
                            <div>
                                <h4>COACHING</h4>
                                <h4>plan</h4>
                            </div>
                        </div>
                        <p>Personalised, purposeful, and built entirely around YOU. For the ones who want more than a one-size-fits-all workout. It's for anyone chasing specific goals with structure and accountability by their side.
                            Whether it's a Hyrox PR, fat loss, or lean muscle gain, this plan adapts to your level, your splits, and your schedule.</p>
                        <div className="about-features">
                            <h5>Training focus areas <img src="/images/feature2.png" alt="card" /></h5>
                            <ul>
                                <li>From Hyrox-specific program, fat-loss To muscle-building protocols based on your level, splits, and race goal</li>
                                <li>You're the boss. A fully personalised training plan tailored to your goals</li>
                            </ul>
                        </div>
                    </div>
                    <div className="batches">
                        <p>New batches starts on</p>
                        <div className="batches-box1">
                            <div className="box1-inner">
                                <h5>15 Sept, 2025</h5>
                                <h5>01 Oct, 2025</h5>
                                <h5>16 Oct, 2025</h5>
                            </div>
                            <h4>Enroll today <i class="ri-arrow-right-double-fill"></i></h4>
                        </div>
                        <div className="batches-box2">
                            <p>Join our daily live sessions at<strong> 7:00 AM IST.</strong> Live on <img src="/images/zoom2.png" alt="zoom" /></p>
                        </div>
                    </div>
                    <img src="/images/feature-bg2.png" className='card-bg' alt="star" />
                    <img src="/images/feature-hero2.png" className='card-hero2' alt="card-hero" />
                </div>
            </div>
        </main>
    )
}

export default About