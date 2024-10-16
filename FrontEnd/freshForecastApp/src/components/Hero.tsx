import FreshProduceImage from "../assets/pic1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full bg-white py-4 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex justify-center items-center">
          <img
            className="rounded-3xl border-4 border-[#2A3340] mx-auto my-4 object-cover"
            src={FreshProduceImage}
            alt="Fresh Produce"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#B33F62] font-bold">SCAN FOOD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pt-2 ">
            OPTIMIZE YOUR FOOD THROUGH AI
          </h1>
          <p className="pt-2 pb-4">
            Use our app to scan your produce and quickly assess its quality. 
            Receive personalized recipe suggestions based on your ingredients' 
            freshness, allowing you to reduce food waste while enjoying delicious meals.
          </p>
          <Link to="/scan">
            <button className="bg-[#2A3340] text-[#ffffff] w-[200px] rounded-md font-medium my-2 ml-20 py-3">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
