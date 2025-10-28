/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */
import logo from "./Media/Images/logo.png";
import "./Footer.css"

export default function Footer() {
    return (
        <div className="bg-light">
            <div className="container">
                <div className="row" style={{position:"relative",right:"20px"}}>
                    <div className="col-3" style={{ position: "relative", left: "120px", marginTop: "40px" }}>
                        <img src={logo} alt="logo" style={{ height: "20px", width: "auto" }} />
                        <p
                            className="mt-4"
                            style={{ width: "500px", opacity: "0.6", fontSize: "12px", }}
                        >
                            &copy; 2010 - 2025, Zerodha Broking Ltd.
                            <br />All rights reserved.
                        </p>
                        <p style={{ fontSize: "22px", display: "flex", gap: "15px", opacity: "0.7" }}>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </p>
                        <hr style={{ width: "220px" }} />
                        <p style={{ fontSize: "20px", display: "flex", gap: "19px", opacity: "0.7" }}>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-brands fa-telegram"></i>
                        </p>
                    </div>
                    <div className="col-9" style={{ display: "flex", marginTop: "40px", position: "relative", left: "20px", gap: "1px" }}>
                        <div className="col-3">
                            <ul>
                                <li style={{ fontSize: "18px", fontWeight: "500", marginBottom: "18px" }}>Account</li>
                                <li><a href="#">Open demat account</a></li>
                                <li><a href="#">Minor demat account</a></li>
                                <li><a href="#">NRI demat account</a></li>
                                <li><a href="#">Commodity</a></li>
                                <li><a href="#">Dematerialisation</a></li>
                                <li><a href="#">Fund transfer</a></li>
                                <li><a href="#">MTF</a></li>
                                <li><a href="#">Referral program</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <ul>
                                <li style={{ fontSize: "18px", fontWeight: "500", marginBottom: "18px" }}>Support</li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Support portal</a></li>
                                <li><a href="#">How to file a complaint?</a></li>
                                <li><a href="#">Status of your complaints</a></li>
                                <li><a href="#">Bulletin</a></li>
                                <li><a href="#">Circular</a></li>
                                <li><a href="#">Z-Connect blog</a></li>
                                <li><a href="#">Downloads</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <ul>
                                <li style={{ fontSize: "18px", fontWeight: "500", marginBottom: "18px" }}>Company</li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Philosophy</a></li>
                                <li><a href="#">Press & media</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Zerodha Cares (CSR)</a></li>
                                <li><a href="#">Zerodha.tech</a></li>
                                <li><a href="#">Open source</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <ul>
                                <li style={{ fontSize: "18px", fontWeight: "500", marginBottom: "18px" }}>Quick links</li>
                                <li><a href="#">Upcoming IPOs</a></li>
                                <li><a href="#">Brokerage charges</a></li>
                                <li><a href="#">Market holidays</a></li>
                                <li><a href="#">Economic calendar</a></li>
                                <li><a href="#">Calculators</a></li>
                                <li><a href="#">Markets</a></li>
                                <li><a href="#">Sectors</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-11 small">
                        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.:
                            INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd.
                            – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha
                            Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238
                            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
                            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
                            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
                            to securities broking please write to{" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                complaints@zerodha.com
                            </a>, for DP related to{" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                dp@zerodha.com
                            </a> . Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                        </p>
                        <p>
                            Procedure to file a complaint on{" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                SEBI SCORES
                            </a>
                            : Register on SCORES portal. Mandatory details
                            for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
                            Effective Communication, Speedy redressal of the grievances
                        </p>
                        <p> <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                            Smart Online Dispute Resolution
                        </a>{" "} | {" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                Grievances Redressal Mechanism
                            </a>
                        </p>
                        <p>
                            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                        </p>
                        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                        <p>
                            India's largest broker based on networth as per {" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                NSE. NSE broker factsheet
                            </a>
                        </p>
                        <p>
                            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your
                            stock brokers. Receive information of your transactions directly from Exchange on your mobile/email
                            at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing
                            in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP,
                            Mutual Fund etc.), you need not undergo the same process again when you approach another
                            intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a
                            cheque. Please write the Bank account number and sign the IPO application form to authorize
                            your bank to make payment in case of allotment. In case of non allotment the funds will remain
                            in your bank account. As a business we don't give stock tips, and have not authorized anyone
                            to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering
                            such services, please {" "}
                            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                                create a ticket here.
                            </a>
                        </p>
                    </div>
                     
                    <div className="col-12 bottom-link " >
                        <ul style={{ display: "flex", gap: "15px",position:"relative",left:"200px" }}>
                            <li><a href="#">NSE</a></li>
                            <li><a href="#">BSE</a></li>
                            <li><a href="#">MCX</a></li>
                            <li><a href="#">Terms & conditions</a></li>
                            <li><a href="#">Policies & procedures</a></li>
                            <li><a href="#">Privacy policy </a></li>
                            <li><a href="#">Disclosure</a></li>
                            <li><a href="#">For investor's attention</a></li>
                            <li><a href="#">Investor charter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}