# react-mermaid-diagram

Simple React component to embed Mermaid diagrams.

## Getting started

*** Work in progress: this has not been pushed to NPM yet due to a packaging issue with my rollup config ***

```
npm install @lightenna/react-mermaid-diagram mermaid
```

Then use the component in your React app:

```jsx
import {MermaidDiagram} from "@lightenna/react-mermaid-diagram";

const diagram_text="graph TD\nA-->B;\nB-->C;\n";
return <MermaidDiagram>
  {diagram_text}
</MermaidDiagram>;
```
