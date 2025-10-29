/* eslint-disable jsx-a11y/img-redundant-alt */
import ecosystem from "../Media/Images/ecosystem.png";
import pressLogos from "../Media/Images/pressLogos.png";
export default function Stats() {
  return (
    <div>
      <div className="container" style={{ marginBottom: "80px"}}>
        <div className="row">
          <div className="col-6" style={{position:"relative",left:"80px"}} >
            <h2 style={{ fontSize: "24px", marginBottom: "40px" }}>
              Trust with confidence
            </h2>
            <h3 style={{ fontSize: "20px", opacity: "0.8" }}>
              Customer-first always
            </h3>
            <p
              className="fs-16 mt-2"
              style={{ width: "420px", opacity: "0.6" }}
            >
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
            <h3 style={{ fontSize: "20px", opacity: "0.8" }}>
              No spam or gimmicks
            </h3>
            <p
              className="fs-16 mt-2"
              style={{ width: "420px", color: "rgba(0,0,0,0.6)" }}
            >
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                Our philosophies.
              </a>
            </p>
            <h3 style={{ fontSize: "20px", opacity: "0.8" }}>
              The Zerodha universe
            </h3>
            <p
              className="fs-16 mt-2"
              style={{ width: "420px", opacity: "0.6" }}
            >
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
            </p>
            <h3 style={{ fontSize: "20px", opacity: "0.8" }}>
              No spam or gimmicks
            </h3>
            <p
              className="fs-16 mt-2"
              style={{ width: "420px", color: "rgba(0,0,0,0.6)" }}
            >
              With initiatives like <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                Nudge
              </a> and <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
                Kill Switch              </a>, we don't just facilitate transactions, but actively help you do better with your money.

            </p>
          </div>
          <div
            className="col-6">
            <img src={ecosystem} style={{ height: "560px", position: "relative", bottom: "30px" }} alt=""/>
            <div style={{ display: "flex", position: "relative", left: "80px", marginTop: "5px" }}>
              <a href="#" style={{ textDecoration: "none", marginRight: "30px" }}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
              <a href="#" style={{ textDecoration: "none" }}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>

          </div>
          <img src={pressLogos} alt="award image" style={{ width: "60%", margin: "auto", marginTop: "80px" }}/>
        </div>
      </div>
    </div>
  )
}