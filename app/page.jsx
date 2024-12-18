import { Button } from "@/components/ui/button";
import  {FiDownload} from "react-icons/fi";

// components 
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
   const CV = "/resume/Chandresh_Resume.pdf";
  

  return (
    <section className="h-full mt-5">
      <div className="container mx-auto h-full">
        <div className="flex felx-col xl:flex-row items-center
         justify-between xl:pt-3 xl:pb-10">  
         {/* //xl:pt-8 xl:pb-24 */}
         
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">
              Hi I am <br/> <span className="text-accent">Chandresh </span>
            </h1>
            <h2 className="mb-0">From <strong>front-end</strong> finesse to <strong>back-end</strong> logic</h2>
            <p className="max-m-[500px] mb-9 text-white/80">
            Transforming Ideas into Engaging Digital Journeys
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2">
                  
                  <a href={ CV }  download> Download CV</a>
                  
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500 "/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
         </div>
        </div>
        <Stats/>
        {/* Footer */}
      <footer className="bg-primary py-2 mt-8">
        <div className="container mx-auto text-center text-white">Made with ❤️ by Chandresh</div>
      </footer>
    </section>
  );
};

export default Home;