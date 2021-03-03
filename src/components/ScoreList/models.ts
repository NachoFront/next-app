export interface ScoreListItem{
    id:string,
    avatar:string,
    score:number,
}

export interface ScoreListProps{
    items:ScoreListItem[];
}

export interface ItemsProps {
    avatar: string;
    score: number;
    colorBar:string;
    theme:string;
  }