import Logo from "./assets/Images/logo.png";
import Hero from "./Components/Hero";
import HomeCards from "./Components/HomeCards";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs"/>
      <HomeCards/>
    </>
  );
};

export default App;
