import React from 'react'
import '../styles/GetStarted.scss'

const GetStarted = () => {
  return (
    <main className='starter'>
        <div className="starter-content">
            <div className="starter-left">
                <img src="/images/starter-hero.png" alt="starter" className='starter-hero' />
                <img src="/images/focus4.png" alt="focus" className='starter-arrow' />
            </div>
            <div className="starter-right">
                <h1>SEE US ON <br /> THE FITTER <br /> SIDE</h1>
                <p>Train for the big picture stuff. A fitness regime sculpted by resilience and balance To seize the life you want.</p>
                <button>GET STARTED TODAY! <img src="/images/arrow2.png" alt="arrow" /></button>
                <img src="/images/feature4.png" alt="feature" className='starter-arrow2' />
            </div>
        </div>
    </main>
  )
}

export default GetStarted