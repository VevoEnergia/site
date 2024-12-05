import { Title, Span } from "@/components/ui/text";

export default function ExperienceHighlight() {
    return (
        <div className="flex items-center gap-x-4">
            <div className="min-w-14 h-14 bg-neutral-600 rounded-md"></div>
            <div>
                <Title className="text-5xl">+5</Title>
                <Span>Anos de experiência</Span>
            </div>
        </div>
    );
}
