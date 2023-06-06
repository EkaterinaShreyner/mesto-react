import React from "react";
// import { useState } from "react";

function PopupWithForm(props) {
  // const [isLoading, setIsLoading] = useState(false);
  const popupOpened = props.isOpen ? "popup_opened" : "";

  // function renderLoading() {
  //   setIsLoading(true)
  // }
  
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
            onClick={props.loading}
          >
            {props.buttonText || 'Сохранить'}
            {/* {isLoading && 'Сохрнение...'} */}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
