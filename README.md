# react-mermaid-diagram

Simple React component to embed Mermaid diagrams.

## Getting started

```
npm install mermaid react
npm install @lightenna/react-mermaid-diagram
```

Then use the component in your React app:

```jsx
import {MermaidDiagram} from "@lightenna/react-mermaid-diagram";

const diagram_text="graph TD\nA-->B;\nB-->C;\n";
return <MermaidDiagram>
  {diagram_text}
</MermaidDiagram>;
```
