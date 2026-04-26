'use client';

import { useRouter, useParams } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import NotePreviewClient from './NotePreview.client';

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  return (
    <Modal onClose={() => router.back()}>
      <NotePreviewClient id={id} />
    </Modal>
  );
}
