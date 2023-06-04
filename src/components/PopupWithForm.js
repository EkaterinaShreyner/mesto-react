import React from "react";

function PopupWithForm(props) {
  const popupOpened = props.isOpen ? "popup_opened" : "";
  
  return (
    <section className={`popup ${popupOpened}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={props.onClose}
        ></button>
        <form className="popup__form" name={props.form} onSubmit={props.onSubmit} noValidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            className="popup__button"
            type="submit"
            aria-label="Сохранить"
          >
            {props.buttonText || 'Сохранить'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
