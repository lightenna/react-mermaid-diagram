import { MouseEvent, ReactElement } from 'react';

interface MermaidDiagramProps {
    children: string;
    id?: string;
    testId?: string;
    className?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onError?: (error: any) => void;
}

declare const MermaidDiagram: (props: MermaidDiagramProps) => ReactElement;

export { MermaidDiagram };
