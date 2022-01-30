import React from "react";

const Popup = (props) => {
  return props.trigger ? (
    <>
      <div id="popup-root">
        <div className="popup-overlay ">
          <div className="popup_content">
            <div className="PopUpView">
              <button
                type="button"
                className="trigger_button_close"
                onClick={() => {
                  props.setTrigger(false);
                }}
              >
                ×
              </button>
              <img
                src="./images/rules.png"
                alt="rules"
                className="PopUpImage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default Popup;
