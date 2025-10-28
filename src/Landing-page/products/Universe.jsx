import zerodhaFundhouse from "../Media/Images/zerodhaFundhouse.png";
import sensi from "../Media/Images/sensi.png";
import tijori from "../Media/Images/tijori.png";
import streak from "../Media/Images/streak-logo.png"
import smallscale from "../Media/Images/smallcase-logo.png"
import ditto from "../Media/Images/dittoLogo.png";


export default function Universe() {
    return (
        <div>
            <div className="container" style={{ marginBottom: "80px", marginTop: "180px" }}>
                <div className="row text-center">
                    <h1 style={{ fontSize: "28px", color: "#424242" }}>The Zerodha Universe</h1>
                    <p style={{ fontSize: "16px", color: "#424242", marginTop: "20px" }}>Extend your trading and
                        investment experience even further with our partner platforms
                    </p>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-4" style={{position:"relative",left:"60px"}}>
                        <img src={zerodhaFundhouse} alt="" style={{ height: "55px" }} />
                        <p style={{ fontSize: "12px", color: "#9B9B9B", marginTop: "10px" }}>
                            Our asset management venture <br />
                            that is creating simple and transparent index <br />
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src={sensi} alt="" style={{ height: "55px" }} />
                        <p style={{ fontSize: "12px", color: "#9B9B9B", marginTop: "10px" }}>
                            Options trading platform that lets you <br />
                            create strategies, analyze positions, and examine <br />
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="col-4" style={{position:"relative",right:"60px"}}>
                        <img src={tijori} alt="" style={{ height: "55px" }} />
                        <p style={{ fontSize: "12px", color: "#9B9B9B", marginTop: "10px" }}>
                            Investment research platform <br />
                            that offers detailed insights on stocks, <br />
                            sectors, supply chains, and more.

                        </p>
                    </div>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-4" style={{position:"relative",left:"60px"}}>
                        <img src={streak} alt="" style={{ height: "55px" }} />
                        <p style={{ fontSize: "12px", color: "#9B9B9B", marginTop: "10px" }}>
                            Systematic trading platform <br />
                            that allows you to create and backtest <br />
                            strategies without coding.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src={smallscale} alt="" style={{ height: "55px" }} />
                        <p style={{ fontSize: "12px", color: "#9B9B9B", marginTop: "10px" }}>
                            Thematic investing platform <br />
                            that helps you invest in diversified <br />
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className="col-4" style={{position:"relative",right:"60px"}}>
                        <img src={ditto} alt="" style={{ height: "55px" }} />
                        <p style={{ fontSize: "12px", color: "#9B9B9B", marginTop: "10px" }}>
                            Personalized advice on life <br />
                            and health insurance. No spam <br />
                            and no mis-selling.

                        </p>
                    </div>
                    <button type="button" className="btn fs-5 mt-5" style={{width:"18%",margin:"auto",height:"45px",backgroundColor:"#387ED1",color:"#FFF"}}>Sign up for free</button>
                </div>
            </div>
        </div>
    )
}