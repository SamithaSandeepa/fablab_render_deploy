import React from "react";
import styles from "./Item.module.css"
import { dataindustry } from "./data_industry";

const ItemCard = () => {
    return(

        <div className="max-w-screen-xxl p-5 mx-auto dark:bg-[#ffffff] dark:text-gray-100 shadow mb-5">
            <div className="mb-5 text-center text-[30px] text-[#243c5a] text-front-mono">Industry 4.0 Technologies</div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2 ">   
        { dataindustry.map((user) => {
        return(
            <a href="#" key={user.id}>
            {/* <div key={user.id}> */}
		    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-400 hover:scale-110 duration-300 ease-in-out rounded-t-lg" 
            style={{backgroundImage: `url('${user.link}')`}} >
			    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-cyan-700 dark:to-sky-900"></div>
			       
                            <a rel="noopener noreferrer" href="#" className="no-underline z-10 p-5 font-medium text-md text-xl hover:text-[#ffffff] dark:text-gray-100 ">{user.title}</a>
		        </div>
	        {/* </div> */}
            </a>
        );
        })}
        </div>
        </div>
    );
};

export default ItemCard;