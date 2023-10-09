import { FC } from 'react';
import AvatarImg from './images/image.jpg';

export const ReviewCard: FC = () => {
  return (
    <div className="review-card">
      <img className="review-card__img" src={AvatarImg} alt="Екатерина Вальнова" />
      <div className='review-card-inner'>
        <h4 className="review-card__author">Екатерина Вальнова</h4>
        <p className="review-card__text">
          <span className="review-card__text_quote">“</span>Екатерина Вальнова Доброжелательные подсказки на всех этапах
          помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн
          билет впервые.<span className="review-card__text_quote">”</span>
        </p>
      </div>
    </div>
  );
};
