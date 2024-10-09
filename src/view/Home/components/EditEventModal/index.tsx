import React, { useState } from 'react';
import Modal from '../../../../components/Modal';
import { Input } from '../../../../components/Input';
import Spacing from '../../../../components/Spacing';
import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import { Controller, useForm } from 'react-hook-form';
import { EditModalProps, NewModalProps } from '../../../../types';
import { formatDate } from '../../../../utils/mask';
import { useEventData } from '../../../../hooks/useEventData';

type FormValues = {
  eventTitle: string;
  startDate: string;
  startHour: string;
  endDate: string;
  endHour: string;
  price: number;
};

export default function EditModal({
  isOpen,
  setIsOpen,
  eventTitle,
  startDate,
  endDate,
  price,
  id,
  eventStatus
}: EditModalProps) {
  const { handleUpdateEvent } = useEventData();
  const [status, setStatus] = useState({
    title: eventStatus,
    value: 0
  });
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormValues>({});

  return (
    <Modal
      isOpen={isOpen}
      title="Update your event"
      description="Update event data and status"
      height="700px"
    >
      <form
        onSubmit={handleSubmit((data) => {
          const start = new Date(data.startDate);
          const end = new Date(data.endDate);
          if (end <= start) {
            alert('Invalid End Date! The Start Date cannot come before the End Date');
          } else {
            if (eventStatus === status.title) {
              const body = {
                title: data.eventTitle,
                startDate: `${data.startDate}T${data.startHour}`,
                endDate: `${data.endDate}T${data.endHour}`,
                currency: data.price,
                eventStatus: eventStatus
              };
              handleUpdateEvent(id, body);
              setIsOpen(false);
            } else {
              const body = {
                title: data.eventTitle,
                startDate: `${data.startDate}T${data.startHour}`,
                endDate: `${data.endDate}T${data.endHour}`,
                currency: data.price,
                eventStatus: status.value
              };
              handleUpdateEvent(id, body);
              setIsOpen(false);
            }
          }
        })}
      >
        <Controller
          name="eventTitle"
          control={control}
          render={({ field }) => <Input label="Event Name" defaultValue={eventTitle} {...field} />}
        />

        <div style={{ display: 'flex' }}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Input
                label="Start Date"
                {...field}
                type="date"
                defaultValue={startDate.split('T')[0]}
              />
            )}
          />
          <Spacing />
          <Controller
            name="startHour"
            control={control}
            render={({ field }) => (
              <Input
                label="Start Hour"
                {...field}
                type="time"
                defaultValue={startDate.split('T')[1]}
              />
            )}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <Input label="End Date" {...field} type="date" defaultValue={endDate.split('T')[0]} />
            )}
          />
          <Spacing />
          <Controller
            name="endHour"
            control={control}
            render={({ field }) => (
              <Input
                label="End Hour"
                {...field}
                type="time"
                defaultValue={startDate.split('T')[1]}
              />
            )}
          />
        </div>
        <Controller
          name="price"
          control={control}
          render={({ field }) => <Input label="Price" {...field} defaultValue={price} />}
        />
        <Select
          width="100%"
          label="Event Status"
          data={[
            {
              title: 'Started',
              value: 1
            },
            {
              title: 'Completed',
              value: 2
            },
            {
              title: 'Paused',
              value: 3
            }
          ]}
          value={status.title}
          onClick={(data) => setStatus(data)}
        />
        <Button text="Update" width="100%" type="submit" />
        <Spacing />
        <Button
          text="Cancel Update"
          width="100%"
          appearance="ghost"
          onClick={() => setIsOpen(!isOpen)}
        />
      </form>
    </Modal>
  );
}
