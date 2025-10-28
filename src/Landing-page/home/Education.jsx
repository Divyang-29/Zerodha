/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import education from "../Media/Images/education.png";

export default function Education() {
    return (
        <div>
            <div className="container" style={{marginBottom:"80px",marginRight:"10px"}}>
                <div className="row">
                    <div className="col-5">
                        <img src={education} alt="edu img" style={{height:"300px",width:"auto",position:"relative",left:"50px"}}/>
                    </div>
                    <div className="col-7" style={{marginTop:"40px",position:"relative",left:"30px"}}>
                        <h2
                            style={{ fontSize: "24px", marginBottom: "15px", opacity: "0.8" }}
                        >
                            Free and open market education
                        </h2>
                        <p
                            className="fs-16 mt-4"
                            style={{ width: "550px", opacity: "0.6" }}
                        >
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>
                        <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                            Varsity <i className="fa-solid fa-arrow-right"></i>
                        </a>
                         <p
                            className="fs-16 mt-5"
                            style={{ width: "500px", opacity: "0.6" }}
                        >
                           TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        </p>
                         <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                            TradingQ&A  <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}