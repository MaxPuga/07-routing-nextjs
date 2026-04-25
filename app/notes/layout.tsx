import type { ReactNode } from 'react';

export default function NotesLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div style={{ position: 'relative' }}>
      {children}
      {modal}
    </div>
  );
}
