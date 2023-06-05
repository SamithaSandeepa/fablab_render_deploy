import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider";
import EditPastEvent from "../../../components/event.component/EditPastEvent";
import { useParams } from "react-router-dom";


const EventUpdate = ({isAuthenticated}) => {
  const { setLoading } = useStateContext();
  const history = useHistory();

  useEffect(() => {
    console.log(history);
    if (typeof isAuthenticated === "undefined") {
      console.log("undefined");
      // Authentication status not yet determined, do nothing
    } else if (!isAuthenticated) {
      // User is not authenticated, redirect to login page
      history.push("/login");
    } else {
      // User is authenticated, do something that takes time
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [history, isAuthenticated]);

  const { id } = useParams();

  return (
    <>
        <div className="container m-0 p-0">
          <EditPastEvent id={id}/>
        </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(EventUpdate);
