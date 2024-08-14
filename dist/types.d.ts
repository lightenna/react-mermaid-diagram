import React, { MouseEvent } from 'react';

interface MermaidDiagramProps {
    children: string;
    id?: string;
    testId?: string;
    className?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onError?: (error: any) => void;
}

declare function MermaidDiagram(props: MermaidDiagramProps): React.JSX.Element;

export { MermaidDiagram as default };
