import { FC } from 'react';
import { TripFilter } from '../../components/TripFilter/TripFilter';
import { HeaderTop } from '../../components/HeaderTop/HeaderTop';
import { LastTickets } from '../../components/LastTickets/LastTickets';

export const TrainSelectionPage: FC = () => {
  return <div>
    TrainSelectionPage
    <HeaderTop />
    <TripFilter/>
    <LastTickets/>
  </div>;
};
