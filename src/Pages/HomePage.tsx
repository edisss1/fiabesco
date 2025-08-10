import Discover from "../components/Layout/Discover"
import Explore from "../components/Layout/Explore"
import Hero from "../components/Layout/Hero"
import Footer from "../components/Layout/Footer"
import NavBar from "../components/Layout/NavBar"

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
