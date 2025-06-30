import Discover from "../components/molecules/Discover"
import Explore from "../components/molecules/Explore"
import Hero from "../components/molecules/Hero"
import Footer from "../components/organisms/Footer"
import NavBar from "../components/organisms/NavBar"

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Discover />
            <Explore />
            <Footer />
        </>
    )
}
export default Home
