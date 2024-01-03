import { Button } from "antd";
import BgContact from "/images/bg-contact.jpg";
import VectorTop from "/images/vector-top.png";
const Contact = () => {
  return (
    <div className="container py-10 flex-center">
      <div className="h-[300px] w-[800px] relative flex-center">
        <img src={BgContact} alt="bg-contact"></img>
        <div className="absolute text-center flex flex-col items-center gap-[10px]">
          <span className="font-[fraunces] font-semibold text-[30px]">
            Have A Project In Mind? Let's Get Start.
          </span>
          <span className="max-w-[500px] text-center">
            You're looking for a solid partner for the project having in your
            mind. Connect with us to make your work easier.
          </span>
          <Button className="mt-3 w-[150px] h-[50px] bg-[#FF774C] text-white">
            Get Started
            <span className="pl-3">
              <img src={VectorTop} alt="vector-top"></img>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
