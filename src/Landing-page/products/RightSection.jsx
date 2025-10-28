export default function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container py-5">
      <div className="row align-items-center px-5">
        
        {/* Text Section */}
        <div className="col-md-6">
          <div style={{ paddingLeft: "60px" }}> {/* shift inner content only */}
            <h2 style={{ fontSize: "24px", color: "#424242" }}>{productName}</h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#424242",
                marginTop: "25px",
                maxWidth: "300px",
              }}
            >
              {productDescription}
            </p>
            <div className="mt-3">
              <a
                href={learnMore}
                style={{
                  textDecoration: "none",
                  color: "#387ED1",
                  fontSize: "16px",
                }}
              >
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-end">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
