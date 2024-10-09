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

export type EditModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  eventTitle: string;
  startDate: string;
  startHour: string;
  endDate: string;
  endHour: string;
  price: number;
  eventStatus: string;
  id: number;
};
