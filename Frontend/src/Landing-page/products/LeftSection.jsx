import googleplay from "../Media/Images/googlePlayBadge.png";
import appstore from "../Media/Images/appstoreBadge.png";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div>
      <div className="container" style={{ marginBottom: "80px" }}>
        <div className="row p-5">
          <div className="col-8" style={{ position: "relative", left: "90px" }}>
            <img src={imageURL} alt="" />
          </div>
          <div className="col-4 mt-5">
            <h2 style={{ fontSize: "24px", color: "#424242" }}>
              {productName}
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#424242",
                marginTop: "25px",
              }}
            >
              {productDescription}
            </p>

            <div className="mt-3">
              <a
                href={tryDemo}
                style={{
                  textDecoration: "none",
                  color: "#387ED1",
                  fontSize: "16px",
                }}
              >
                Try Demo <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a
                href={learnMore}
                style={{
                  textDecoration: "none",
                  color: "#387ED1",
                  marginLeft: "50px",
                  fontSize: "16px",
                }}
              >
                Learn more <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="mt-4">
              <a href={googlePlay}>
                <img src={googleplay} alt="playstore img" />
              </a>
              <a href={appStore}>
                <img
                  src={appstore}
                  alt="app store"
                  style={{ marginLeft: "20px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
