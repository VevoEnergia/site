import { Heading } from "./text";

export function OrderedList({ children }: { children: React.ReactNode }) {
  return <ol className="list-none list-inside space-y-4">{children}</ol>;
}

export function OrderedListItem({
  index,
  text,
}: {
  index: number;
  text: string;
}) {
  return (
    <li className="grid grid-cols-[48px_1fr] items-start text-lg">
      <Heading className="text-3xl !font-bold text-secondary">
        {index}
        <span className="text-primary">.</span>
      </Heading>
      {text}
    </li>
  );
}
