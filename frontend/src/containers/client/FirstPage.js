import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import ImageSlider from "../../components/homepage.component/ImageSlider";

const FirstPage = () => {
  return (
    <>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNipunaPerera99%2F&tabs=timeline&width=1000&height=499&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=true&appId=797828301687659"
        width="1000"
        height="499"
        // style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </>
  );
  // }
};

export default FirstPage;
