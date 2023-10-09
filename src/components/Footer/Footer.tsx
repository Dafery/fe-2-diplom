import { FC } from 'react';
import ArrowUpImg from './images/arrow-up.png';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <section className="contacts" id="contacts">
          <h3 className="contacts__title">Свяжитесь с нами</h3>
          <ul className="contacts__list">
            <li className="contacts__item contacts__item_phone">8 (800) 000 00 00</li>
            <li className="contacts__item contacts__item_email">inbox@mail.ru</li>
            <li className="contacts__item contacts__item_skype">tu.train.tickets</li>
            <li className="contacts__item contacts__item_address">
              г. Москва <br /> ул. Московская 27-35 <br /> 555 555
            </li>
          </ul>
        </section>
        <section className="subs">
          <div className="sub">
            <h3 className="sub__title">Подписка</h3>
            <p className='sub__text'>Будьте в курсе событий</p>
            <form className="sub__form">
              <input className="sub__form-input" type="text" placeholder='e-mail'/>
              <button className="sub__form-btn">Отправить</button>
            </form>
          </div>
          <div className="socials">
            <h3 className="socials__title">Подписывайтесь на нас</h3>
            <ul className="socials__list">
              <li className="socials__item">
                <a href="#" className="socials__item-link socials__item-link_youtube" title="Youtube">
                  <span className="visually-hidden">Youtube</span>                  
                </a>
              </li>
              <li className="socials__item">
                <a href="#" className="socials__item-link socials__item-link_linkedin" title="Linkedin">
                  <span className="visually-hidden">Linkedin</span>
                </a>
              </li>
              <li className="socials__item">
                <a href="#" className="socials__item-link socials__item-link_google" title="Google+">
                  <span className="visually-hidden">Google</span>
                </a>
              </li>
              <li className="socials__item">
                <a href="#" className="socials__item-link socials__item-link_facebook" title="Facebook">
                  <span className="visually-hidden">Facebook</span>
                </a>
              </li>
              <li className="socials__item">
                <a href="#" className="socials__item-link socials__item-link_twitter" title="Twitter">
                  <span className="visually-hidden">Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <h1 className="logo">Лого</h1>
          <a className="footer__btn-up" href="#header">
            <img src={ArrowUpImg} width={'36px'} height={'36px'} alt="Наверх" />
          </a>
          <span className="footer__copy">2018 web</span>
        </div>
      </div>
    </footer>
  );
};
