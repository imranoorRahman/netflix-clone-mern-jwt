import { AcUnit } from "@material-ui/icons";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://images.pexels.com/photos/5082582/pexels-photo-5082582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default Home;
