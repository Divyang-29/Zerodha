import nithinKamath from "../Media/Images/nithinKamath.jpg";

export default function Team() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <hr className="mx-auto" style={{ width: "100%", borderColor: "#b9b9b9ff", marginBottom: "80px" }} />
                    </div>

                    <div className="col-4" style={{ marginRight: "20px", marginBottom: "80px" }}>
                        <p style={{ lineHeight: "1.8" }}>We kick-started operations on the 15th of August, 2010 with the goal of
                            breaking all barriers that traders and investors face in India in terms
                            of cost, support, and technology. We named the company Zerodha, a
                            combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                        <p style={{ lineHeight: "1.8" }}>
                            Today, our disruptive pricing models and in-house technology have
                            made us the biggest stock broker in India.
                        </p>
                        <p style={{ lineHeight: "1.8" }}>
                            Over 1.6+ crore clients place billions of orders every year through
                            our powerful ecosystem of investment platforms, contributing over
                            15% of all Indian retail trading volumes.
                        </p>
                    </div>
                    <div className="col-4">
                        <p style={{ lineHeight: "1.8" }}>
                            In addition, we run a number of popular open online
                            educational and community initiatives to empower retail
                            traders and investors.
                        </p>
                        <p style={{ lineHeight: "1.8" }}>

                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                Rainmatter
                            </a>
                            , our fintech fund and incubator, has invested
                            in several fintech startups with the goal of growing the
                            Indian capital markets.
                        </p>
                        <p style={{ lineHeight: "1.8" }}>
                            And yet, we are always up to something new every day.
                            Catch up on the latest updates on our{" "} <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                blog
                            </a>  or see what
                            the media is{" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                saying about us
                            </a>
                            {" "} or learn more about our
                            business and product{" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                philosophies
                            </a>
                            .
                        </p>
                    </div>
                    <div className="col-12">
                        <h2 style={{ fontSize: "24px", textAlign: "center" }}>People</h2>
                    </div>
                    <div className="col-3 mt-5">
                        <img src={nithinKamath} alt="" style={{ borderRadius: "50%", height: "300px",marginLeft:"30px" }} />
                        <h5 style={{fontSize:"18px",color:"#424242",marginLeft:"120px",marginTop:"20px"}}>Nithin Kamath</h5>
                        <p style={{fontSize:"14.4",color:"#666",marginLeft:"128px"}}>Founder, CEO</p>
                    </div>
                    <div className="col-5 mt-5" style={{marginLeft:"60px",marginBottom:"200px"}}>
                        <p style={{ lineHeight: "1.8" }}>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
                            he faced during his decade long stint as a trader. Today, Zerodha has
                            changed the landscape of the Indian broking industry.
                        </p>
                        <p style={{ lineHeight: "1.8" }}>
                            He is a member of the SEBI Secondary Market Advisory Committee
                            (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p style={{ lineHeight: "1.8" }}>
                            Playing basketball is his zen.
                        </p>
                        <p style={{ lineHeight: "1.8" }}>
                            Connect on {" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                Homepage {" "}
                            </a>
                            /{" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                TradingQnA {" "}
                            </a>
                            /{" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                Twitter {" "}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
