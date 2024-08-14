import React from "react";
import { render, screen } from "@testing-library/react";
import MermaidDiagram from "./MermaidDiagram";

describe("MermaidDiagram", () => {
    test("renders the MermaidDiagram component", () => {
        const diagram_text = "graph TD\n  A-->B;\nB-->C;\n";
        render(<MermaidDiagram testId={"mdtestid"}>
            {diagram_text}
        </MermaidDiagram>);
        const element = screen.getByTestId("mdtestid");
        expect(element).toBeInTheDocument();
    });
});
