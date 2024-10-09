import { Dispatch, SetStateAction } from 'react';

export type EventProps = {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  currency: number;
  eventStatus: string;
};

export type NewModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
