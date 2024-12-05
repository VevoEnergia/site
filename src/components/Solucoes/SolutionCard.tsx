import { Subtitle, Paragraph } from "@/components/ui/text";

export default function SolutionCard({ title, text }: { title: string; text: string }) {
    return (
        <div className="flex items-center border rounded-md drop-shadow-sm p-4">
            <div className="min-w-20 h-20 bg-neutral-800 me-8 rounded-md"></div>
            <div className="flex flex-col items-start">
                <Subtitle className="text-xl">{title}</Subtitle>
                <Paragraph className="text-xs">{text}</Paragraph>
            </div>
        </div>
    );
}
