import { FC } from 'react';
import MonitorImg from './images/monitor.png';
import OfficeImg from './images/office.png';
import PlanetImg from './images/planet.png';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';
import { FindTickets } from '../../components/FindTickets/FindTickets';
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';
import { Footer } from '../../components/Footer/Footer';

export const HomePage: FC = () => {
  return (
    <div>
      <header className="header" id="header">
        <HeaderTop />
        <div className="header-content">
          <h2 className="header-content__title">
            Вся жизнь - <span className="header-content__title_weight_b">путешествие!</span>
          </h2>
          <FindTickets />
        </div>
      </header>
      <main>
        <section className="about-us" id="about-us">
          <h2 className="title-h2">О нас</h2>
          <div className="about-us__content">
            <p className="about-us__content-text">
              Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше
              людей заказывают жд билеты через интернет.
            </p>
            <p className="about-us__content-text">
              Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем
              о преимуществах заказа через интернет.
            </p>
            <p className="about-us__content-text about-us__content-text_weight_b">
              Покупать жд билеты дешево можно за 90 суток до отправления поезда. <br /> Благодаря динамическому
              ценообразованию цена на билеты в это время самая низкая.
            </p>
          </div>
        </section>
        <section className="how-works" id="how-works">
          <div className="how-works__inner">
            <h2 className="title-h2 title-h2_how-works">Как это работает</h2>
            <a className="how-works__btn-more" href="#">
              Узнать больше
            </a>
          </div>
          <div className="how-works__content">
            <div className="how-works__content-block">
              <img className="how-works__content-img" src={MonitorImg} width={'162px'} height={'162px'} />
              Удобный заказ на сайте
            </div>
            <div className="how-works__content-block">
              <img className="how-works__content-img" src={OfficeImg} width={'162px'} height={'162px'} />
              Нет необходимости ехать в офис
            </div>
            <div className="how-works__content-block">
              <img className="how-works__content-img" src={PlanetImg} width={'162px'} height={'162px'} />
              Огромный выбор направлений
            </div>
          </div>
        </section>
        <section className="reviews" id="reviews">
          <h2 className="title-h2">Отзывы</h2>
          <ul className="rewiews__list">
            <li className="reviews__list-item">
              <ReviewCard />
            </li>
            <li className="reviews__list-item">
              <ReviewCard />
            </li>
          </ul>
          <ul className="reviews__nav">
            <li className="reviews__nav-item active"></li>
            <li className="reviews__nav-item"></li>
            <li className="reviews__nav-item"></li>
            <li className="reviews__nav-item"></li>
            <li className="reviews__nav-item"></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};
