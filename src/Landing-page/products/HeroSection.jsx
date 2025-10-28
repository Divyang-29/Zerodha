export default function HeroSection() {
    return (
        <div>
            <div className="container" style={{ marginBottom: "80px", marginTop: "170px" }}>
                <div className="row text-center">
                    <h1 style={{ fontSize: "28px", color: "#424242" }}>Zerodha Products</h1>
                    <p style={{ fontSize: "20px", color: "#424242",marginTop:"8px" }}>Sleek, modern, and intuitive trading platforms</p>
                    <p style={{ fontSize: "16px" }}>Check out our {" "}
                        <a href="#" style={{ textDecoration: "none", color: "#387ED1", fontSize: "16px" }}>investment offerings
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </p>
                
                 <div className="col" style={{marginTop:"100px"}}>
                        <hr className="mx-auto" style={{ width: "100%", borderColor: "#b9b9b9ff", marginBottom: "80px" }} />
                    </div>
                    </div>
            </div>
        </div>
    )
}