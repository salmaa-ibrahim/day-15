// import React from "react";
import "./Popup.css";
import Icon from '/images/icon-success-check.svg'
export const Popup = ({ text, closePopup }) => {
    return (
        <div className="popup-container">
            <div className="popup-body">
                <div className="popup-text">
                    <img src={Icon}alt="" />
                    <h3>{text}</h3>
                </div>
                <span>Thank you for completing the form. We will be in touch soon.</span>
                <button onClick={closePopup}>X</button>
            </div>
        </div>
    );
};
