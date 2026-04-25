import type { ReactNode } from 'react';

export default function NotesLayout({
  children,
  sidebar,
  modal,
}: {
  children: ReactNode;
  sidebar?: ReactNode;
  modal?: ReactNode;
}) {
  return (
    <div style={{ position: 'relative' }}>
      {sidebar}
      {children}
      {modal}
    </div>
  );
}
