import Banner from "../Banner/Banner";
import AllBrand from "./AllBrand";
import ClientReview from "./ClientReview";
import WhyChoose from "./whychoose";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBrand></AllBrand>
            <WhyChoose></WhyChoose>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;