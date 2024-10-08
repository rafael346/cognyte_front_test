'use client';
import { api } from './index';

export async function getEvents() {
  return await api.get('/event');
}

export async function createEvent(body: any) {
  return await api.post('/event', body);
}

export async function updateEvent(id: number, body: any) {
  return await api.put(`/event/${id}`, body);
}

export async function deleteEvent(id: number) {
  return await api.delete(`/event/${id}`);
}
