import "./CreateTicket.css";

export default function CreateTicket() {
    const dropdownStyle = { width: "800px", marginBottom: "15px" };
    const buttonStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "left",
        height: "70px",
    };
    const iconBoxStyle = {
        width: "50px",
        height: "50px",
        fontSize: "20px",
        color: "#387ed1",
    };

    return (
        <div
            className="container"
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginTop: "40px",
                marginBottom:"10px"
            }}
        >
            {/* LEFT SIDE: Dropdown Section */}
            <div
                className="drop-box"
                style={{
                    marginLeft: "80px",
                    marginTop: "20px",
                    marginBottom: "20px",
                }}
            >
                {/* All your dropdowns — unchanged */}
                {/* 1️⃣ Account Opening */}
                <div className="dropdown" style={dropdownStyle}>
                    <button className="btn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={buttonStyle}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="bg-light d-flex align-items-center justify-content-center" style={iconBoxStyle}>
                                <i className="fa-solid fa-plus"></i>
                            </span>
                            <span style={{ marginLeft: "10px" }}>Account Opening</span>
                        </div>
                    </button>
                    <ul className="dropdown-menu" style={{ width: "800px", position: "static", transform: "none" }}>
                        <li><a className="dropdown-item" href="#">Resident individual</a></li>
                        <li><a className="dropdown-item" href="#">Minor</a></li>
                        <li><a className="dropdown-item" href="#">Non Resident Indian (NRI)</a></li>
                        <li><a className="dropdown-item" href="#">Company, Partnership, HUF and LLP</a></li>
                        <li><a className="dropdown-item" href="#">Glossary</a></li>
                    </ul>
                </div>

                {/* 2️⃣ Your Zerodha Account */}
                <div className="dropdown" style={dropdownStyle}>
                    <button className="btn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={buttonStyle}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="bg-light d-flex align-items-center justify-content-center" style={iconBoxStyle}>
                                <i className="fa-regular fa-user"></i>
                            </span>
                            <span style={{ marginLeft: "10px" }}>Your Zerodha Account</span>
                        </div>
                    </button>
                    <ul className="dropdown-menu" style={{ width: "800px", position: "static", transform: "none" }}>
                        <li><a className="dropdown-item" href="#">Your Profile</a></li>
                        <li><a className="dropdown-item" href="#">Client Master Report (CMR) and Depository Participant (DP)</a></li>
                        <li><a className="dropdown-item" href="#">Nomination</a></li>
                        <li><a className="dropdown-item" href="#">Transfer and conversion of securities</a></li>
                    </ul>
                </div>

                {/* 3️⃣ Kite */}
                <div className="dropdown" style={dropdownStyle}>
                    <button className="btn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={buttonStyle}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="bg-light d-flex align-items-center justify-content-center" style={iconBoxStyle}>
                                <i className="fa-solid fa-k"></i>
                            </span>
                            <span style={{ marginLeft: "10px" }}>Kite</span>
                        </div>
                    </button>
                    <ul className="dropdown-menu" style={{ width: "800px", position: "static", transform: "none" }}>
                        <li><a className="dropdown-item" href="#">IPO</a></li>
                        <li><a className="dropdown-item" href="#">Trading FAQs</a></li>
                        <li><a className="dropdown-item" href="#">Margin Trading Facility (MTF) and Margins</a></li>
                        <li><a className="dropdown-item" href="#">Charts and orders</a></li>
                        <li><a className="dropdown-item" href="#">Alerts and Nudges</a></li>
                        <li><a className="dropdown-item" href="#">General</a></li>
                    </ul>
                </div>

                {/* 4️⃣ Funds */}
                <div className="dropdown" style={dropdownStyle}>
                    <button className="btn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={buttonStyle}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="bg-light d-flex align-items-center justify-content-center" style={iconBoxStyle}>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                            </span>
                            <span style={{ marginLeft: "10px" }}>Funds</span>
                        </div>
                    </button>
                    <ul className="dropdown-menu" style={{ width: "800px", position: "static", transform: "none" }}>
                        <li><a className="dropdown-item" href="#">Add money</a></li>
                        <li><a className="dropdown-item" href="#">Withdraw money</a></li>
                        <li><a className="dropdown-item" href="#">Add bank accounts</a></li>
                        <li><a className="dropdown-item" href="#">eMandates</a></li>
                    </ul>
                </div>

                {/* 5️⃣ Console */}
                <div className="dropdown" style={dropdownStyle}>
                    <button className="btn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={buttonStyle}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="bg-light d-flex align-items-center justify-content-center" style={iconBoxStyle}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <span style={{ marginLeft: "10px" }}>Console</span>
                        </div>
                    </button>
                    <ul className="dropdown-menu" style={{ width: "800px", position: "static", transform: "none" }}>
                        <li><a className="dropdown-item" href="#">Portfolio</a></li>
                        <li><a className="dropdown-item" href="#">Corporate actions</a></li>
                        <li><a className="dropdown-item" href="#">Funds statement</a></li>
                        <li><a className="dropdown-item" href="#">Reports</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Segments</a></li>
                    </ul>
                </div>

                {/* 6️⃣ Coin */}
                <div className="dropdown" style={dropdownStyle}>
                    <button className="btn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={buttonStyle}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="bg-light d-flex align-items-center justify-content-center" style={iconBoxStyle}>
                                <i className="fa-solid fa-coins"></i>
                            </span>
                            <span style={{ marginLeft: "10px" }}>Coin</span>
                        </div>
                    </button>
                    <ul className="dropdown-menu" style={{ width: "800px", position: "static", transform: "none" }}>
                        <li><a className="dropdown-item" href="#">Mutual funds</a></li>
                        <li><a className="dropdown-item" href="#">National Pension Scheme (NPS)</a></li>
                        <li><a className="dropdown-item" href="#">Fixed Deposit (FD)</a></li>
                        <li><a className="dropdown-item" href="#">Features on Coin</a></li>
                        <li><a className="dropdown-item" href="#">Payments and Orders</a></li>
                        <li><a className="dropdown-item" href="#">General</a></li>
                    </ul>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div style={{ marginRight: "30px", width: "360px" }}>
                {/* 🟨 Notice Box */}
                <div
                    className="outer-box"
                    style={{
                        backgroundColor: "#FEF5EB",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "10px 15px",
                        position: "relative",
                    }}
                >
                    <div
                        className="inner-rectangle"
                        style={{
                            height: "100%",
                            width: "10px",
                            backgroundColor: "#F09737",
                            position: "absolute",
                            left: "0",
                            top: "0",
                            bottom: "0",
                        }}
                    ></div>

                    <div className="content" style={{ marginLeft: "20px", marginTop: "10px" }}>
                        <ul style={{ margin: 0, padding: 0, listStyleType: "disc" }}>
                            <li>
                                <a href="#" className="links">
                                    Delay in commodity (MCX) market <br /> open
                                </a>
                            </li>
                            <li>
                                <a href="#" className="links">
                                    Surveillance measure on scrips - <br /> October 2025
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 🟧 Card BELOW box */}
                <div
                    className="card"
                    style={{
                        width: "100%",
                        marginTop: "20px",
                        border: "1px solid #ddd",
                        backgroundColor: "white",
                    }}
                >
                    <div className="card-header">
                        Quick links
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <a href="#" className="link">
                                1. Track account opening</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="link">
                                2. Track segment activation</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="link">
                                3. Intraday margins </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="link">
                                4. Kite user manual </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="link">
                                5. Learn how to create a ticket
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
