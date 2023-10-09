import { FC } from 'react'
import { LastTicketsCard } from './LastTicketsCard/LastTicketsCard'

export const LastTickets:FC = () => {
  return (
    <section className='last-tickets'>
      <h2 className='last-tickets__title'>Последние билеты</h2>
      <LastTicketsCard/>
    </section>
  )
}
