import React from "react";

function Main() {
  return(
    <main className="content">
      <section className="profile">
        <div className="profile__pen">
          <img
            className="profile__avatar"
            src="#"
            alt="Аватар"
          />
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
            >
            </button>
          </div>
          <p className="profile__subtitle">Иследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить место"
        >
        </button>
      </section>
      <div className="elements">
        <template className="cards">
          <div className="element">
            <button
              className="element__card-delete"
              type="button"
              aria-label="Удалить"
            >
            </button>
            <img className="element__image"/>
            <div className="element__line">
              <h2 className="element__title"></h2>
              <div className="element__section-like">
                <button
                  className="element__like"
                  type="button"
                  aria-label="Нравится"
                >
                </button>
                <p className="element__likes"></p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </main>
  )
}

export default Main;