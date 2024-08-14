import {MouseEvent} from "react";

export interface MermaidDiagramProps {
    children: string,
    id?: string,
    className?: string,
    onClick?: (event: MouseEvent<HTMLElement>) => void,
    onError?: (error: any) => void,
}
