

export interface HeaderProps {
    currentMonth: Date;
    previous: () => void;
    next: () => void;
    today: () => void;
    switchFestives: () => void;
  }