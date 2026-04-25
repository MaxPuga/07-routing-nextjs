'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import css from '@/components/NotePreview/NotePreview.module.css';

export default function NotePreviewClient({ id }: { id: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error</p>;

  return (
    <div className={css.container}>
      <h2>{data.title}</h2>
      <p className={css.tag}>{data.tag}</p>
      <p>{data.content}</p>
    </div>
  );
}
