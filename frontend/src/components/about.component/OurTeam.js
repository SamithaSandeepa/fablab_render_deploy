import React, { useEffect, useState } from "react";
import Styles from "../../styles/ourteam.module.css";
import { dataourteam } from "../data/data_ourteam";

const OurTeam = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mt-10 font-serif">Our Team</h1>
      <div className={Styles.container}>
        {dataourteam.map((curElem) => {
          return (
            <div className={Styles.card_item} key={curElem.id}>
              <a
                className="no-underline"
                href={curElem.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className={Styles.card_inner}>
                  <img src={curElem.image} />
                  <div className={Styles.userName}>
                    <p className="text-xl mb-1">{curElem.name}</p>
                    <p className="text-slate-400">{curElem.position}</p>
                    <p className="">
                      {/* <FontAwesomeIcon icon={faLinkedin} size="lg" /> */}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OurTeam;
