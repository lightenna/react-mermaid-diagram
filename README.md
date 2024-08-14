# react-mermaid-diagram

Simple React component to embed Mermaid diagrams.

## Getting started

```
npm install @lightenna/react-mermaid-diagram mermaid
```

Then use the component in your React app:

```jsx
const diagram_text="graph TD\nA-->B;\nB-->C;\n";
return <MermaidDiagram>
  {diagram_text}
</MermaidDiagram>;
```
