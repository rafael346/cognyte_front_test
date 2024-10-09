import React from 'react';
import Modal from '../../../../components/Modal';
import { Input } from '../../../../components/Input';
import Spacing from '../../../../components/Spacing';
import Button from '../../../../components/Button';
import { NewModalProps } from '../../../../types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useEventData } from '../../../../hooks/useEventData';

export default function NewModal({ isOpen, setIsOpen }: NewModalProps) {
  const { handleCreateEvent } = useEventData();
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  return (
    <Modal
      isOpen={isOpen}
      title="Create a new event"
      description="Choose when and how much your event will cost"
      height="600px"
    >
      <form
        onSubmit={handleSubmit((data) => {
          const start = new Date(data.startDate);
          const end = new Date(data.endDate);
          if (end <= start) {
            alert('DATE RULE');
          } else {
            const body = {
              title: data.eventTitle,
              startDate: `${data.startDate}T${data.startHour}`,
              endDate: `${data.endDate}T${data.endHour}`,
              currency: parseFloat(data.price),
              eventStatus: 1
            };
            handleCreateEvent(body);
            setIsOpen(false);
          }
        })}
      >
        <Controller
          name="eventTitle"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input label="Event Name" {...field} />}
        />

        <div style={{ display: 'flex' }}>
          <Controller
            name="startDate"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input label="Start Date" {...field} type="date" />}
          />
          <Spacing />
          <Controller
            name="startHour"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input label="Start Hour" {...field} type="time" />}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Controller
            name="endDate"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input label="End Date" {...field} type="date" />}
          />
          <Spacing />
          <Controller
            name="endHour"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input label="End Hour" {...field} type="time" />}
          />
        </div>
        <Controller
          name="price"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input label="Price" {...field} />}
        />
        <Button text="Create" width="100%" type="submit" />
        <Spacing />
        <Button text="Cancel" width="100%" appearance="ghost" onClick={() => setIsOpen(false)} />
      </form>
    </Modal>
  );
}
