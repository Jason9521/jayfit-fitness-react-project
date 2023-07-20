import Title from "../components/Header";
import HomeOptions from "../components/HomeOptions"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <Title/>
            <HomeOptions/>
            <Footer/>
        </div>
     );
}
 
export default Home;