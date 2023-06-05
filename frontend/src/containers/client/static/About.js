// import Styles from "../../styles/about.module.css";
// import Styles from "../../../styles/about.module.css";
import OurTeam from "../../../components/about.component/OurTeam";
import React, { useEffect, useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

const About = () => {
  return (
    <>
      <div className="container-sm shadow-sm bg-white rounded p-10">
        <h1 className="text-center text-3xl font-serif pb-20">About Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="capitalize text-left font-bold mb-3">
              A Globally Connected Sri Lankan Social Enterprise
            </p>

            <p className="text-justify">
              FabLanka was publicy launched in May 2015 to facilitate and
              nurture the growth of innovative fabrication methods in Sri Lanka.
              FabLanka Foundation (GTE) LTD was incorporated as a not-for-profit
              social enterprise in April 2016 under Companies Act, No 7 of 2007
              of Sri Lanka.
            </p>
            <p className="text-justify">
              A cooperative between professionals in Sri Lanka and around the
              world, FabLanka aims to bring about educational and economic
              changes while minimizing environmental impact to Sri Lanka through
              the digital fabrication revolution.
            </p>
            <p className="text-justify">
              The goal of this cooperative is to develop fabrication labs at
              strategic locations throughout the island. Over time, these
              fabrication labs will connect to the larger global digital
              fabrication networks and organizations (fabfoundation.org)
              allowing local communities to innovate and invent new technologies
              and share knowledge that will positively transform the lives of
              people.
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="card mb-3">
              <h5 className="card-header bg-primary text-white font-bold">
                Our Vision
              </h5>
              <div className="card-body">
                <p className="text-justify">
                  Establish a technologically advanced and globally connected
                  makers' society in Sri Lanka.
                </p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-header bg-primary text-white font-bold">
                Our Mission
              </h5>
              <div className="card-body">
                <p className="text-justify">
                  build almost anything that could improve the quality of life.
                  Provide a platform of highest standard to exchange knowledge,
                  ideas and expertise on existing and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <p className="text-left font-bold mt-5 mb-3">
              Towards a Makers’ society through Community Outreach
            </p>
            <p className="text-justify">
              Developed as a community outreach project, FabLanka allows local
              communities at any socio-economic background to channel their
              creative energy towards technological innovation. Fabrication labs
              will serve as an educational apparatus by providing the knowledge
              and tools through which communities can innovate according to
              their needs. This will empower the youth and intern the community
              towards local economic development.
            </p>
            <p className="text-justify">
              Communities have unique identities and needs. For digital
              fabrication methods such as additive manufacturing, unique
              necessities of each community become an advantage as opposed to
              the mass assembly line manufacturing methods of the past. In Sri
              Lanka, most cities and towns thrive on small businesses that are
              stifled by lack of technical innovation and financial burdens.
              Fabrication labs will serve small and medium scale enterprises
              (SME) by providing them with the necessary technology and
              infrastructure in the form of education, training, and product
              development capabilities that neither local governments nor
              businesses have the capacity to invest in. Innovative fabrication
              methods developed locally for local markets can help overcome the
              stagnation caused by global economic pressures and local economic
              underdevelopment.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <p className="text-left font-bold mt-5 mb-3">
              Towards a Greener Economy that protects the environment
            </p>
            <p className="text-justify">
              The environmental degradation caused by modern economies is
              severe. Much of the raw materials and energy used for production
              is wasted in the manufacturing and transportation processes. Local
              manufacturing methods are needed to pave the way for a greener
              economy. Developing countries have the advantage of not having to
              change the foundations of their economic structure to exploit the
              changes necessary for a sustainable economy. The needs of a
              sustainable economy can be met on a local level with innovative
              manufacturing methods. Fabrication labs can lead the way in
              identifying sustainable manufacturing practices for local
              economies to prosper.
            </p>
            <p className="text-justify">
              FabLanka aims to bridge the gap between advancements in
              information technology and lack of advancement in manufacturing
              techniques in Sri Lanka. In doing so, the goal is to solve
              multifaceted problems through education, innovation and building
              sustainable local communities that are globally connected.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <OurTeam />
      </div>
    </>
  );
};
export default About;
