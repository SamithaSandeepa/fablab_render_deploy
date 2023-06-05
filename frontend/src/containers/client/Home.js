import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import ImageSlider from "../../components/homepage.component/ImageSlider";
import NewAlert from "../../components/news.component/NewAlert";
import PastEvent from "../../components/event.component/PastEvent";

const Home = () => {
  const [readMore, setReadMore] = useState(false);
  const { loading, setLoading } = useStateContext();

  useEffect(() => {
    setLoading(true);
    // Do something that takes time...
    setLoading(false);
  }, []);

  const extraContent = (
    <div>
      <p className="extra-content mt-3">Extra Content</p>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <>
      <div className="container px-0">
        <div className="grid grid-cols-12 grid-rows-2 rounded-md md:px-10">
          {/* bg-gradient-to-b from-green-600 to-blue */}
          <div className="col-span-12 row-span-3 sm:col-span-8 sm:row-span-1 sm:bg-[#F1F6F9] py-0 px-0 flex items-center overflow-hidden">
            <ImageSlider />
          </div>
          <div className="col-span-4 row-span-1 bg-[#F1F6F9] py-0 px-0 flex items-center overflow-hidden hidden sm:block">
            <NewAlert />
          </div>
          <div className="col-span-12 sm:col-span-12 row-span-5 px-5 sm:px-2 pt-2">
            <p className="text-justify mt-3">
              Fab Lanka is a group of highly motivated individuals coming
              together to set up fabrication labs (fab labs) throughout Sri
              Lanka as a community outreach project. The abundance of an
              educated work force, high degree of IT usage, and existence of a
              large number of small and medium size manufactures (SMEs) makes
              Sri Lanka an ideal home for fab labs. The benefits of bringing in
              new technology is the ability to transform the manufacturing
              sector of local economies in environmentally friendly ways. In
              addition, it will also strengthen employment for youth in the 21st
              century manufacturing job sector.
            </p>
            <div className="text-justify mt-3 mb-3">
              <p>
                Inspired by the technologically based social movements such as
                Open Source Ecology, FabLab, and RepRap who’s aim is to spread
                technology and knowledge to build a more equitable society,
                FabLanka aspires to provide a platform for social and economic
                development through education and technological innovation.
              </p>
              {readMore && extraContent}
              <a
                className="read-more-link mt-3"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <p className="text-sm mt-3">
                  <small>{linkName}</small>
                </p>
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4 row-span-1 bg-blue-100 my-5 py-0 px-0 flex items-center relative overflow-hidden block sm:hidden">
            <NewAlert />
          </div>
          {/* <div className="col-span-12 row-span-1 bg-[#D6E4E5]">
            <div className="flex justify-center items-center mt-4">
              <PastEvent />
            </div>
          </div> */}
        </div>
      </div>
      <div className="container p-0 mb-0 sm:mb-4">
        <div className="grid grid-cols-12 grid-rows-1 rounded-md">
          <div className="col-span-12 row-span-1 bg-[#D6E4E5]">
            <div className="flex justify-center items-center mt-4 md:mb-4 sm:mb-4">
              <PastEvent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
