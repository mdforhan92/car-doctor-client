import Banner from "../Banner/Banner";
import Location from "../Location/Location";
import OurTeam from "../OurTeam/OurTeam";
import About from "./About/About";
import ChooseUs from "./ChooseUS/ChooseUs";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Location></Location>
            <OurTeam></OurTeam>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;