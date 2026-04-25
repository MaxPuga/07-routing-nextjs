import axios from 'axios';
import type { Note } from '@/types/note';

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

// axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
// // axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface Params {
  page: number;
  perPage: number;
  search?: string;
  tag?: string;
}

export const fetchNotes = async ({
  page,
  perPage,
  search,
  tag,
}: Params): Promise<FetchNotesResponse> => {
  const res = await api.get('/notes', {
    params: { page, perPage, search, tag },
  });

  return res.data;
};

export const createNote = async (
  data: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>
) => {
  const res = await api.post<Note>('/notes', data);
  return res.data;
};

export const deleteNote = async (id: string) => {
  const res = await api.delete<Note>(`/notes/${id}`);
  return res.data;
};

export const fetchNoteById = async (id: string) => {
  const res = await api.get<Note>(`/notes/${id}`);
  return res.data;
};
