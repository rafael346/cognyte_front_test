/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createEvent, deleteEvent, getEvents, updateEvent } from '../api/services/ApiCalls';
import React, {
  createContext,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type Dispatch
} from 'react';

interface EventDataProviderProps {
  children: ReactNode;
}

interface EventContextProps {
  eventList: [];
  open: boolean;
  isEditting: boolean;
  handleCreateEvent: (body: any) => Promise<void>;
  handleDeleteEvent: (id: number) => Promise<void>;
  handleUpdateEvent: (id: number, body: any) => Promise<void>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setIsEditting: Dispatch<SetStateAction<boolean>>;
}

const EventDataContext = createContext<EventContextProps>({} as EventContextProps);

export function EventDataProvider({ children }: EventDataProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [updateList, setUpdateList] = useState<boolean>(false);
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [eventList, setEventlist] = useState<any>([]);

  async function handleGetEvents() {
    try {
      const response = await getEvents();
      setEventlist(response.data);
    } catch (error) {
      console.log('Error');
    }
  }
  async function handleDeleteEvent(id: number) {
    try {
      const response = await deleteEvent(id);
      console.log(response.data);
      setUpdateList(!updateList);
    } catch (error) {
      console.log('Error');
    }
  }
  async function handleUpdateEvent(id: number, body: any) {
    try {
      const response = await updateEvent(id, body);
      setOpen(false);
      setUpdateList(!updateList);
      console.log(response.data);
    } catch (error) {
      console.log('Error');
    }
  }

  async function handleCreateEvent(body: any) {
    try {
      const response = await createEvent(body);
      console.log(response.data);
      setOpen(false);
      setUpdateList(!updateList);
    } catch (error) {
      console.log('Error');
    }
  }

  useEffect(() => {
    handleGetEvents();
  }, [updateList]);
  return (
    <EventDataContext.Provider
      value={{
        eventList,
        handleDeleteEvent,
        handleCreateEvent,
        handleUpdateEvent,
        open,
        setOpen,
        isEditting,
        setIsEditting
      }}
    >
      {children}
    </EventDataContext.Provider>
  );
}

export function useEventData() {
  const hook = useContext(EventDataContext);

  return hook;
}
