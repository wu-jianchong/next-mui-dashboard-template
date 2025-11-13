// src/types/seminar.ts
export interface Status {
  label: string;
  color: string;
  textColor: string;
}

export interface Category {
  label: string;
  color: string;
  textColor: string;
}

export interface Seminar {
  id: string;
  date: string;
  status: Status;
  category: Category;
  hasDeadline: boolean;
  title: string;
  isEnded: boolean;
}
