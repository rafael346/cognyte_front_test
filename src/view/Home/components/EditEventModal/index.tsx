import React from 'react';
import Modal from '../../../../components/Modal';
import { Input } from '../../../../components/Input';
import Spacing from '../../../../components/Spacing';
import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import { Controller, useForm } from 'react-hook-form';

export default function EditModal() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  return (
    <Modal
      isOpen
      title="Update your event"
      description="Update event data and status"
      height="600px"
    >
      <form
        onSubmit={handleSubmit((data) => {
          const start = new Date(data.startDate);
          const end = new Date(data.endDate);
          if (end <= start) {
            alert('DATE RULE');
          } else {
            console.log(data);
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
          value={'city'}
          onClick={(data) => /**/ {}}
        />
        <Button text="Update" width="100%" />
        <Spacing />
        <Button text="Cancel Update" width="100%" appearance="ghost" />
      </form>
    </Modal>
  );
}
