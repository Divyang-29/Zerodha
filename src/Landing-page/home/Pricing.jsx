import pricing0 from "../Media/Images/pricing0.png";
import intradayTrades from "../Media/Images/intradayTrades.png";

export default function Pricing() {
  return (
    <div>
      <div className="container" style={{ marginBottom: "80px",marginRight:"10px" }}>
        <div className="row">
          {/* Left side */}
          <div className="col-6">
            <h2
              style={{ fontSize: "24px", marginBottom: "20px", opacity: "0.8" }}
            >
              Unbeatable pricing
            </h2>
            <p
              className="fs-16 mt-2"
              style={{ width: "450px", opacity: "0.6" }}
            >
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Right side */}
          <div className="col-6">
            <div
              style={{ display: "flex", position: "relative", right: "220px",top:"20px" }}
            >
              {/* Block 1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "10px",
                }}
              >
                <img
                  src={pricing0}
                  alt="Pricing"
                  style={{ width: "auto", height: "80px" }}
                />
                <div style={{ width: "60px",position:"relative",right:"10px" }}>
                  <p style={{ fontSize: "8px", margin: "0" }}>Free account</p>
                  <p style={{ fontSize: "8px", margin: "0" }}>Opening</p>
                </div>
              </div>

              {/* Block 2 */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src={pricing0}
                  alt="Pricing"
                  style={{ width: "auto", height: "80px" }}
                />
                <div style={{ width: "100px",position:"relative",right:"10px" }}>
                  <p style={{ fontSize: "8px", margin: "0" }}>
                    Free equity delivery
                  </p>
                  <p style={{ fontSize: "8px", margin: "0" }}>
                    and direct mutual funds
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src={intradayTrades}
                  alt="Pricing"
                  style={{ width: "auto", height: "80px" }}
                />
                <div style={{ width: "200px" }}>
                  <p style={{ fontSize: "8px", margin: "0" }}>Intraday and</p>
                  <p style={{ fontSize: "8px", margin: "0" }}>F&O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
