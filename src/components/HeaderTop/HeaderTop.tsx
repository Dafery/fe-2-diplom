import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const HeaderTop: FC = () => {
  const navigate = useNavigate();
  const navTo = () => navigate('/');
  

  return (
    <div className="header-top">
          <div className="header-top__logo-wrap">
            <h1 className="header-top__logo logo"  onClick={navTo}>Лого</h1>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="#about-us">
                  О нас
                </a>
              </li>
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="#how-works">
                  Как это работает
                </a>
              </li>
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="#reviews">
                  Отзывы
                </a>
              </li>
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="#contacts">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
  )
}
