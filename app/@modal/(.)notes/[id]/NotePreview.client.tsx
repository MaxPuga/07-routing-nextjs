'use client';

import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';

export default function NotePreviewClient({ id }: { id: string }) {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (!data) return null;

  return (
    <Modal onClose={() => router.back()}>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </Modal>
  );
}
