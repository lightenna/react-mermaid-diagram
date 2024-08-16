import {ReactElement, useCallback, useEffect, useState} from "react";
import mermaid, {RenderResult} from 'mermaid';
import {MermaidDiagramProps} from "./MermaidDiagram.types";
import React from "react";

const MermaidDiagram = (props: MermaidDiagramProps): ReactElement => {
    const [element, setElement] = useState<HTMLDivElement>();
    const [render_result, setRenderResult] = useState<RenderResult>();

    const container_id = `${props.id || 'd' + Date.now()}-mermaid`;
    const diagram_text = props.children;

    // initialize mermaid here, but beware that it gets called once for every instance of the component
    useEffect(() => {
        // wait for page to load before initializing mermaid
        mermaid.initialize({
            startOnLoad: true,
            // securityLevel: "loose",
            // theme: "forest",
            logLevel: 5
        });
    },[]);

    // hook to track updates to the component ref, compatible with useEffect unlike useRef
    const updateDiagramRef = useCallback((elem: HTMLDivElement) => {
        if (!elem) return;
        setElement(elem);
    }, []);

    // hook to update the component when either the element or the rendered diagram changes
    useEffect(() => {
        if (!element) return;
        if (!render_result?.svg) return;
        element.innerHTML = render_result.svg;
        render_result.bindFunctions?.(element);
    }, [
        element,
        render_result
    ]);

    // hook to handle the diagram rendering
    useEffect(() => {
        if (!diagram_text && diagram_text.length === 0) return;
        // create async function inside useEffect to cope with async mermaid.run
        (async () => {
            try {
                const rr = await mermaid.render(`${container_id}-svg`, diagram_text);
                setRenderResult(rr);
            } catch (e: any) {
                props.onError?.(e);
            }
        })();
    }, [
        diagram_text
    ]);

    // render container (div) to hold diagram (nested SVG)
    return (
        <div className={props.className}
             onClick={props.onClick}
             id={container_id}
             data-testid={props.testId}
             ref={updateDiagramRef}
        />
    );
}

export { MermaidDiagram };