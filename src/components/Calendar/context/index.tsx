import React from 'react';
// import Calendar from '../Calendar';

type Action = { type: 'prevMonth' } | { type: 'nextMonth' };
type Dispatch = (action: Action) => void;
type State = { currentMonth: Date };
type CalendarProviderProps = { children: React.ReactNode };

const CalendarStateContext = React.createContext<State | undefined>(undefined);
const CalendarDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function calendarReducer(state: State, action: Action) {
  switch (action.type) {
    case 'prevMonth': {
      console.log('prevMonth');
      return { currentMonth: new Date() };
    }
    case 'nextMonth': {
      console.log('nextMonth');

      return { currentMonth: new Date() };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function CalendarProvider({ children }: CalendarProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(calendarReducer, { currentMonth: new Date() });

  return (
    <CalendarStateContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>{children}</CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
}

function useCalendarState(): State {
  const context = React.useContext(CalendarStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}

function useCalendarDispatch(): unknown {
  const context = React.useContext(CalendarDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
}

export { CalendarProvider, useCalendarState, useCalendarDispatch };
