import React from "react";

function ImagePopup() {
  return(
    <div className="popup popup-picture">
          <div className="popup__content-picture">
              <figure className="popup__figure">
                  <img src="#" alt="" className="popup__image" />
                  <figcaption className="popup__caption"></figcaption>
              </figure>
              <button type="button" className="popup__close popup__close-pic"></button>
          </div>
      </div>
  )
}

export default ImagePopup;