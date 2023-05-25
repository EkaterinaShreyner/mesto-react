import React from "react";

function ImagePopup(props) {
  let isOpenPopup = props.card ? "popup_opened" : "";
  return (
    <section className={`popup popup_image ${isOpenPopup}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={props.onClose}
        >
        </button>
        <img
          className="popup__image-full"
          src={props.card ? props.card.link : ""}
          alt={props.card ? props.card.name : ""}
        />
        <h2 className="popup__title popup__title_image-full">{props.card ? props.card.name : ""}</h2>
      </div>
    </section>
  )
}

export default ImagePopup;