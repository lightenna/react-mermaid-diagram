import {MouseEvent} from "react";

export interface MermaidDiagramProps {
    children: string,
    id?: string,
    testId?: string,
    className?: string,
    onClick?: (event: MouseEvent<HTMLElement>) => void,
    onError?: (error: any) => void,
    disableJs?: boolean,
    // Mermaid configuration options
    securityLevel?: "strict" | "loose" | "antiscript" | "sandbox",
    theme?: "forest" | "default" | "base" | "dark" | "neutral" | "null",
    logLevel?: 0 | 2 | 1 | 5 | "trace" | "debug" | "info" | "warn" | 3 | "error" | 4 | "fatal",
    suppressErrorRendering?: boolean,
}
