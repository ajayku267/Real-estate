import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Explore <br />
              Your Dream
              <br /> House
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1} end={99} duration={4} /> <span></span>
              </span>
              <span className="secondaryText">Product Listed</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={102} end={201} duration={4} /> <span></span>
              </span>
              <span className="secondaryText">Customer Arrived</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={3.5} /> <span></span>
              </span>
              <span className="secondaryText">Ratings</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
