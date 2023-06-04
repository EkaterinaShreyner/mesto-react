// import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {

  const currentUser = useContext(CurrentUserContext);
  // console.log(props);
  const isOwn = props.card.owner._id === currentUser._id;
  
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__like ${isLiked && 'element__like_active'}`
  );

  function handleCardClick() {
    props.onCardClick(props.card);
  } 

  function handleDeleteCard() {
    console.log('карточка удалена');
  }

  return(
      <div className="element">
        {isOwn && 
          <button 
            className="element__card-delete"
            type="button"
            aria-label="Удалить"
            onClick={handleDeleteCard}
          />} 
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