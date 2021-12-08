import { Navbar, Featured, List } from "../components/index";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
