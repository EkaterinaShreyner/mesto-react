import React from "react";

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  } 
  return(
      <div className="element">
        <button
          className="element__card-delete"
          type="button"
          aria-label="Удалить"
        >
        </button>
        <img className="element__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleCardClick}
        />
        <div className="element__line">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__section-like">
            <button
              className="element__like"
              type="button"
              aria-label="Нравится"
            >
            </button>
            <p className="element__likes">{props.card.likes.length}</p>
          </div>
        </div>
      </div>
  )
}

export default Card;