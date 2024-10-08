import React from 'react';
import Modal from '../../../../components/Modal';
import { Input } from '../../../../components/Input';
import Spacing from '../../../../components/Spacing';
import Button from '../../../../components/Button';
import Select from '../../../../components/Select';

export default function EditModal() {
  return (
    <Modal
      isOpen
      title="Update your event"
      description="Update event data and status"
      height="600px"
    >
      <Input name="eventTitle" label="Event Name" value="" />
      <div style={{ display: 'flex' }}>
        <Input name="startDate" label="Start Date" />
        <Spacing />
        <Input name="startHour" label="Start Hour" />
      </div>
      <div style={{ display: 'flex' }}>
        <Input name="endDate" label="End Date" />
        <Spacing />
        <Input name="endHour" label="End Hour" />
      </div>
      <Input name="price" label="Price" />
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
    </Modal>
  );
}
