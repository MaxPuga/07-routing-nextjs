import NotesClient from '../../Notes.client';

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  return <NotesClient tag={tag} />;
}
