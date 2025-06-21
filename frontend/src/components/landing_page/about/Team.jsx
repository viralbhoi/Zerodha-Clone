import React from 'react'

export default function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className='fs-3 text-center mt-5'>
          People
        </h1>
      </div>

      <div className="row p-3 mt-5 text-muted" style={{fontSize:"1.2em",lineHeight:"1.8"}}>
        <div className="col p-3 text-center">
          <img src="media/nithinKamath.jpg" alt="" style={{borderRadius:"100%"}} width={"50%"}/>
          <h4 className='mt-5'>Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
            <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  )
}
