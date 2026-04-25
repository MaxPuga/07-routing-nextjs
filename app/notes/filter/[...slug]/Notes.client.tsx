'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

export default function NotesClient({ tag }: { tag?: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['notes', tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: '',
        ...(tag && tag !== 'all' ? { tag } : {}),
      }),
  });

  if (isLoading) return <p>Loading...</p>;

  return <NoteList notes={data?.notes || []} />;
}
