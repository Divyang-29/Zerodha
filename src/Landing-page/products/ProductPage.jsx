import HeroSection from "./HeroSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import kite from "../Media/Images/kite.png";
import coin from "../Media/Images/coin.png";
import varsity from "../Media/Images/varsity.png";
import console from "../Media/Images/console.png";
import api from "../Media/Images/kiteconnect.png";

export default function ProductPage() {
  return (
    <div>
      <HeroSection />
      <LeftSection
        imageURL={kite}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, 
                advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your
                Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL={console}
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL={coin}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly 
                to your Demat account.Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL={api}
        productName="Kite Connect API"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your 
        ∂trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL={varsity}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth 
        coverage and illustrations. Content is broken down into bite-size cards to help you learn
         on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Universe />
    </div>
  );
}
