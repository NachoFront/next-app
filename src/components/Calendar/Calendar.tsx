import {
  addMonths,
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  getWeeksInMonth,
  isSameDay,
  isSameMonth,
  isWeekend,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import React, { FC, useState } from 'react';
import { WrapperCalendar, Cells, Day,WeekDay } from './style';
import Header from './Header/Header';

const today = new Date();
const NAMESDAY = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const Calendar: FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(today));
  
  const [selectedDate] = useState<Date>(today);

  const monthDays = Array.from({ length: getWeeksInMonth(currentMonth, { weekStartsOn: 1 }) }).map((_, index) => {
    const currentWeek = addWeeks(startOfWeek(currentMonth, { weekStartsOn: 1 }), index);
    const start = startOfWeek(currentWeek, { weekStartsOn: 1 });
    const end = endOfWeek(currentWeek, { weekStartsOn: 1 });

    return eachDayOfInterval({ start, end }).map((day) => {
      return (
        <Day
          key={day.toString()}
          selected={isSameDay(day, selectedDate)}
          disabled={!isSameMonth(day, currentMonth)}
          weekend={isWeekend(day)}
        >
          {day.getDate()}
        </Day>
      );
    });
  });

  const renderNamesDay = (arrNames: string[]) => {
    return arrNames.map((day, index) => {
      return <WeekDay key={`nameDay-${index}`}>{day}</WeekDay>;
    });
  };

  return (
    <WrapperCalendar>
      <Header
        currentMonth={currentMonth}
        previous={() => setCurrentMonth(subMonths(currentMonth, 1))}
        next={() => setCurrentMonth(addMonths(currentMonth, 1))}
        today={() => setCurrentMonth(startOfMonth(today))}
        switchFestives={() => console.log('switch festives')}
      ></Header>

      <Cells>
        {renderNamesDay(NAMESDAY)}

        {monthDays}
      </Cells>
    </WrapperCalendar>
  );
};

export default Calendar;
