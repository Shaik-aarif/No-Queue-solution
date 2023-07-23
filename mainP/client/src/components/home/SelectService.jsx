import React from "react";
import "../Styles/home_styles/SelectService.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";

const SelectService = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <div className="SelectService" id="selectservice">
        <div className="intro">
          <p className="text-3xl text-center mb-3">
            Select which service You want to continue with..
          </p>
        </div>
        <div className="areYou">
          <p className="text-2xl are">Are You a </p>
        </div>

        <div className="buttons">
        
            {user && (
          <div className="row">
              <div className="col-lg-6  col-md-12 flex items-center justify-end">
                <Link to={"/Registration"}>
                  <button className="btn btn-dark ">Merchant</button>
                </Link>
              </div>
            <div className="col-lg-6 col-md-12 flex items-center justify-start">
            <Link to = {"/CustomerPage"}>
              <button className="btn btn-dark">Customer</button>
            </Link>
            </div>
            </div>
            )}
            {!user && (
              <div className="row">
              <div className="col-lg-6  col-md-12 flex items-center justify-end">
                <Link to={"/Registration"}>
                  <button className="btn btn-dark " disabled>Merchant</button>
                </Link>
              </div>
            <div className="col-lg-6 col-md-12 flex items-center justify-start">
            <Link to = {"/CustomerPage"}>
              <button className="btn btn-dark" disabled>Customer</button>
            </Link>
            </div>
            </div>
            )}
        </div>
      </div>
    </>
  );
};

export default SelectService;
