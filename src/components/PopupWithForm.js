import React from "react";

function PopupWithForm(props) {
  let isOpenPopup = props.isOpen ? "popup_opened" : "";
  
  return (
    <section className={`popup popup_${props.name} ${isOpenPopup}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={props.onClose}
        ></button>
        <form className="popup__form" name={props.form} noValidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            className="popup__button"
            type="submit"
            aria-label="Сохранить"
            onClick={props.onSubmit}
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
