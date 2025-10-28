import homeHero from "../Media/Images/homeHero.png";

export default function HeroSection() {
  return (
    <div className="container p-5" style={{marginBottom:"80px",marginTop:"80px"}}>
      <div className="row text-center">
        <img src={homeHero} alt="Hero Img"  style={{height:"360px",width:"auto",margin:"auto",marginBottom:"60px",marginTop:"15px"}}/>
        <h1 style={{fontSize:"28px"}}>Invest in everything</h1>
        <p className="mb-5 mt-3" style={{fontSize:"20px"}}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button type="button" className="btn fs-5" style={{width:"18%",margin:"auto",height:"45px",backgroundColor:"#387ED1",color:"#FFF"}}>Sign up for free</button>
      </div>
    </div>
  );
}
