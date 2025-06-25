import React from 'react'

export default function Team() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center p-3 md:mt-5 mt-2 border-t">
        <h1 className='text-lg text-center mt-5'>
          People
        </h1>
      </div>

      <div className="flex md:flex-row flex-col p-3 md:mt-5 mt-2 text-gray-500" style={{fontSize:"1.2em",lineHeight:"1.8"}}>
        <div className="flex-col flex md:w-1/2 w-full p-3 text-center justify-center items-center">
          <img src="media/nithinKamath.jpg" alt="" style={{borderRadius:"100%"}} width={"50%"}/>
          <h4 className='mt-5'>Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="flex-col md:w-1/2 w-full p-3">
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
