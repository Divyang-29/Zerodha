import pricing0 from "../Media/Images/pricing0.png";
import intradayTrades from "../Media/Images/intradayTrades.png";

export default function Brokerage(){
    return(
        <div>
            <div className="container">
                <div className="row g-0">
                    <div className="col-4 text-center" style={{lineHeight:"1.8",position:"relative",left:"40px"}}>
                        <img src={pricing0} alt="" style={{height:"190px"}}/>
                        <h2 style={{fontSize:"28px",color:"#424242",marginTop:"20px",marginBottom:"25px"}}>Free equity delivery</h2>
                        <p style={{fontSize:"16px",color:"#666"}}>All equity delivery investments (NSE, BSE),<br />
                             are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                     <div className="col-4 text-center" style={{lineHeight:"1.8"}}>
                        <img src={intradayTrades} alt="" style={{height:"190px"}}/>
                        <h2 style={{fontSize:"28px",color:"#424242",marginTop:"20px",marginBottom:"25px"}}>Intraday and F&O trades</h2>
                        <p style={{fontSize:"16px",color:"#666"}}>Flat ₹ 20 or 0.03% (whichever is lower) per <br />
                         executed order on intraday trades across <br /> equity, currency, and commodity trades. Flat <br />₹20 on all option trades.</p>
                    </div>
                     <div className="col-4 text-center" style={{lineHeight:"1.8",position:"relative",right:"40px"}}>
                        <img src={pricing0} alt="" style={{height:"190px"}}/>
                        <h2 style={{fontSize:"28px",color:"#424242",marginTop:"20px",marginBottom:"25px"}}>Free direct MF</h2>
                        <p style={{fontSize:"16px",color:"#666"}}>All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP <br /> charges.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}