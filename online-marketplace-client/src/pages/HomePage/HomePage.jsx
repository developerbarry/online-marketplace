import BrandSection from "../../components/BrandSection/BrandSection";
import FreelancerPro from "../../components/FreelancerPro/FreelancerPro";
import HeroSection from "../../components/HeroSection/HeroSection";
import HireCard from "../../components/HireCard/HireCard";
import JobCategoriesTab from "../../components/JobCategoriesTab/JobCategoriesTab";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <BrandSection />
            <JobCategoriesTab />
            <HireCard />
            <FreelancerPro />
            
        </>
    );
};

export default HomePage;