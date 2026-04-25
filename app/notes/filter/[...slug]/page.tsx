import NotesClient from '../../Notes.client';

export default function FilterPage({ params }: { params: { slug: string[] } }) {
  const tag = params.slug?.[0];

  const normalizedTag = tag === 'all' ? undefined : tag;

  return <NotesClient tag={normalizedTag} />;
}
