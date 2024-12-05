import { ReactNode } from "react";

interface GridProps{
    cols: number;
    rows: number;
    className?: string;
    children?: ReactNode;
}
export default function Grid({cols, rows, className = "", children} : GridProps){
    return (
        <div className={`grid ${className} gap-16`} style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(0,1fr))`
        }}>
            {children}
        </div>
    )
}