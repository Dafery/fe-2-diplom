import { FC } from 'react'

export const LastTicketsCard:FC = () => {
  return (
    <div className='last-tickets-card'>
      <div className='last-tickets-card__direction'>
        <div className='last-tickets-card__from'>
          <span className='last-tickets-card__city'>Санкт-Петербург</span>
          <span className='last-tickets-card__railway-station'>Курский <br/> вокзал</span>
        </div>
        <div className='last-tickets-card__to'>
          <span className='last-tickets-card__city'>Самара</span>
          <span className='last-tickets-card__railway-station'>Московский <br/> вокзал</span>
        </div>
      </div>
      <div className='last-tickets-card__bottom'>
        <ul className='last-tickets-card__options-list'>
          <li className='last-tickets-card__options-item last-tickets-card__options-item_wi-fi'><span className='visually-hidden'>Wi-Fi</span></li>
          <li className='last-tickets-card__options-item last-tickets-card__options-item_high-speed'><span className='visually-hidden'>Скоростной</span></li>
          <li className='last-tickets-card__options-item last-tickets-card__options-item_nutrition'><span className='visually-hidden'>Питание</span></li>
        </ul>
        <div className='last-tickets-card__price'>от <span className='last-tickets-card__price-number'>2 500</span><span className='visually-hidden'>RUB</span></div>
      </div>
    </div>
  )
}
