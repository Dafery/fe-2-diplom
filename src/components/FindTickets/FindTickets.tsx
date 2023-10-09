import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const FindTickets: FC = () => {
  const navigate = useNavigate();
  const navTo = () => navigate('/train-selection');

  return <form className="find-tickets">
  <div className="find-tickets__way">
    <label className="find-tickets__label">Направление</label>
    <div className="find-tickets__way-container">
      <input className="find-tickets__input" type="text" placeholder="Откуда" />
      <button className="find-tickets__btn-swap">
        <span className="visually-hidden">Поменять</span>
      </button>
      <input className="find-tickets__input" type="text" placeholder="Куда" />
    </div>
  </div>
  <div className="find-tickets__date">
    <label className="find-tickets__label">Дата</label>
    <div className="find-tickets__date-container">
      <input className="find-tickets__input find-tickets__input_date" type="text" placeholder="ДД/ММ/ГГ" />
      <input className="find-tickets__input find-tickets__input_date" type="text" placeholder="ДД/ММ/ГГ" />
    </div>
  </div>
  <button className="find-tickets__btn" type="button" onClick={navTo}>
    Найти билеты
  </button>
</form>;
};
