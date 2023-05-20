import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';
//import './App.css';
//import './index.css';

function App() {
  return (

    <div className="page">
      <Header />
      <Main />
      <Footer />
      <section className="popup popup_edit-profile">
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть окно"></button>
        <form className="popup__form" name="form-edit-profile">
          <h2 className="popup__title">Редактировать профиль</h2>
          <input
          className="popup__input popup__input_type_name"
          name="name"
          type="text"
          placeholder="Имя"
          minlength="2"
          maxlength="40"
          id="profile-name"
          />
          <span class="popup__input-error profile-name-error"></span>
          <input
          className="popup__input popup__input_type_info"
          name="about"
          type="text"
          placeholder="О себе"
          minlength="2"
          maxlength="200"
          id="profile-info"
          />
          <span className="popup__input-error profile-info-error"></span>
          <button className="popup__button" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </section>
    <section className="popup popup_cards">
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть окно"></button>
        <form className="popup__form" name="form-cards" novalidate>
          <h2 className="popup__title">
            Новое место
          </h2>
          <input
            className="popup__input popup__input_card_name"
            name="name"
            type="text"
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required
            id="card-name-input"
          />
          <span className="popup__input-error card-name-input-error"></span>
          <input
            className="popup__input popup__input_card_link"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required
            id="card-link-input"
          />
          <span className="popup__input-error card-link-input-error"></span>
          <button className="popup__button submit-button-card" type="submit" aria-label="Сохранить">Создать</button>
        </form>
      </div>
    </section>
    <section className="popup popup_image">
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть окно"></button>
        <img className="popup__image-full" src="#" alt=""/>
        <h2 className="popup__title popup__title_image-full"></h2>
      </div>
    </section>
    <section className="popup popup_confirm">
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть окно"></button>
        <form className="popup__form" name="form-confirm" novalidate>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__button submit-button-confirm" type="submit" aria-label="Да">Да</button>
        </form>
      </div>
    </section>
    <section className="popup popup_avatar">
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть окно"></button>
        <form className="popup__form" name="form-avatar" novalidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <input
            className="popup__input popup__input_type_avatar-link"
            name="avatar"
            type="url"
            placeholder="Ссылка на аватар"
            required
            id="avatar-link-input"
          />
          <span className="popup__input-error avatar-link-input-error"></span>
          <button className="popup__button submit-button-confirm" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </section>
    </div>
  );
}




export default App;
