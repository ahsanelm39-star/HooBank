import Header from "./component/Header";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Status from "./component/Status";
import HandelMony from "./component/HandelMony";
import ControlBilling from "./component/ControlBilling";
import FQA from "./component/FQA";
import BetterCard from "./component/BetterCard";
import ComponyLogo from "./component/Compony";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Status/>
        <HandelMony/>
        <ControlBilling/>
        <BetterCard/>
        <FQA/>
        <ComponyLogo/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
