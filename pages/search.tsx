import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import NextHead from "../components/NextHead";
import SearchMenu from "../components/SearchMenu";

export default function SearchPage() {
    return <>
        <NextHead title='Search' />
        <Navbar />
        <HomeHero />

        {/* SEARCH SECTION */}
        <SearchMenu />
        
        <Footer />
    </>
}