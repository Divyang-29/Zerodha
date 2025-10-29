import signup from "../Media/Images/signup.png";
import stock from "../Media/Images/stocks-acop.png";
import mf from "../Media/Images/mf-acop.png";
import ipo from "../Media/Images/ipo-acop.png";
import fo from "../Media/Images/fo-acop.png";

export default function SignUp() {
    return (
        <div>
            <div className="container" style={{ marginBottom: "80px", marginTop: "170px" }}>
                <div className="row ">
                    <h1 className="text-center mb-4" style={{ fontSize: "28px", color: "#424242" }}>Open a free demat and trading account online</h1>
                    <p className="text-center" style={{ fontSize: "20px", color: "#666" }}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                    <div className="col-6">
                        <img src={signup} alt="signup img" style={{ marginLeft: "120px", marginTop: "80px",height:"350px" }} />
                    </div>
                    <div className="col-4" style={{ position: "relative", left: "80px", top: "90px" }}>
                        <h1 style={{ fontSize: "24px", color: "#424242" }}>Signup now</h1>
                        <p style={{ fontSize: "16px", color: "#666", marginBottom: "25px" }}>Or track your existing application</p>
                        <div className="input-group input-group-lg">
                            <span className="input-group-text" id="inputGroup-sizing-lg">🇮🇳 +91</span>
                            <input
                                type="text"
                                className="form-control small-input"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg"
                                placeholder="Enter your mobile number"
                                maxLength={10}
                            />
                        </div>
                        <button type="button" className="btn fs-5" style={{ width: "60%", margin: "auto", height: "45px", backgroundColor: "#387ED1", color: "#FFF", marginTop: "30px" }}>Get OTP</button>
                        <p style={{ color: "#666", fontSize: "12px", marginTop: "30px" }}>By proceeding, you agree to the Zerodha  <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                            terms
                        </a> & {" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                privacy policy
                            </a>
                        </p>
                        <hr />
                        <p style={{ color: "#666", fontSize: "12px", marginTop: "30px" }}>Looking to open NRI account?{" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                Click here
                            </a>
                        </p>
                    </div>

                </div>
                <div className="col">
                    <h1 className="text-center" style={{ fontSize: "24px", color: "#424242", marginTop: "120px" }}>Investment options with Zerodha demat account</h1>
                    <div className="mt-5 ">
                        <div className="main-box d-flex flex-column align-items-center justify-content-center mx-auto">
                            <div className="outer-box" style={{ display: "flex", gap: "120px" }}>
                                <div className="box" style={{ display: "flex" }}>
                                    <img src={stock} alt="" style={{ width: "auto", height: "80px" }} />
                                    <div className="inner-box" style={{ position: "relative", top: "10px", left: "30px" }}>
                                        <h3 style={{ fontSize: "20px", color: "#424242", marginBottom: "10px" }}>Stocks</h3>
                                        <p style={{ fontSize: "16px", color: "#666", width: "250px" }}>Invest in all exchange-listed securities</p>
                                    </div>
                                </div>
                                <div className="box" style={{ display: "flex" }}>
                                    <img src={mf} alt="" style={{ width: "auto", height: "80px" }} />
                                    <div className="inner-box" style={{ position: "relative", top: "10px", left: "30px" }}>
                                        <h3 style={{ fontSize: "20px", color: "#424242", marginBottom: "10px" }}>Mutual funds
                                        </h3>
                                        <p style={{ fontSize: "16px", color: "#666", width: "250px" }}>Invest in commission-free direct mutual funds</p>
                                    </div>
                                </div>
                            </div>
                            <div className="outer-box" style={{ display: "flex", gap: "120px", marginTop: "40px", position: "relative", right: "15px" }}>
                                <div className="box" style={{ display: "flex" }}>
                                    <img src={ipo} alt="" style={{ width: "auto", height: "80px" }} />
                                    <div className="inner-box" style={{ position: "relative", top: "10px", left: "30px" }}>
                                        <h3 style={{ fontSize: "20px", color: "#424242", marginBottom: "10px" }}>IPO</h3>
                                        <p style={{ fontSize: "16px", color: "#666", width: "250px" }}>Apply to the latest IPOs instantly via UPI</p>
                                    </div>
                                </div>
                                <div className="box" style={{ display: "flex", position: "relative", left: "10px" }}>
                                    <img src={fo} alt="" style={{ width: "auto", height: "80px" }} />
                                    <div className="inner-box" style={{ position: "relative", top: "10px", left: "30px" }}>
                                        <h3 style={{ fontSize: "20px", color: "#424242", marginBottom: "10px" }}>Futures & options
                                        </h3>
                                        <p style={{ fontSize: "16px", color: "#666", width: "250px" }}>Hedge and mitigate market risk through simplified F&O trading</p>
                                    </div>
                                </div>
                            </div>
                             <button type="button" className="btn fs-5 mt-5" style={{width:"18%",margin:"auto",height:"45px",backgroundColor:"#387ED1",color:"#FFF"}}>Explore Investments</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}