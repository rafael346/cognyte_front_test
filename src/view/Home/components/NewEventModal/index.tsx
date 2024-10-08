import React from 'react';
import Modal from '../../../../components/Modal';
import { Input } from '../../../../components/Input';
import Spacing from '../../../../components/Spacing';
import Button from '../../../../components/Button';

export default function NewModal() {
  return (
    <Modal
      isOpen
      title="Create a new event"
      description="Choose when and how much your event will cost"
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
      <Button text="Create" width="100%" />
      <Spacing />
      <Button text="Cancel" width="100%" appearance="ghost" />
    </Modal>
  );
}
