import HeroSection from "./HeroSection";
import Pricing from './Pricing'
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Stats from "./Stats"

export default function HomePage() {

    return (
        <div>
            <HeroSection />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </div>
    )
}