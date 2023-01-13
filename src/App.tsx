import React, { Component } from "react";
import OrgChart, { getNode, OrgChartConfig } from 'react-balkangraph-orgchart'

import "react-balkangraph-orgchart/dist/index.css";

import avatar from "./assets/react.svg";

import "./App.css";

interface NodeType {
  id: string | number;
  pid: string | number;
  node: string;
  [key: string]: string | number;
}

const nodeSize = { height: 142, width: 348 }

function App() {
  const nodes = [
    { id: 1, name: "Andriy", pid: 0, avatar, role: "CEO" },
    { id: 2, name: "Yarik", pid: 1, avatar, role: "Developer" },
    { id: 3, name: "Sasha", pid: 1, avatar, role: "Developer" },
    { id: 4, name: "Oleh", pid: 1, avatar, role: "Designer" },
  ] as unknown as NodeType[];
  return (
    <div className="App">
      <OrgChart
        onCardClick={(object) => console.log(object)}
        nodes={nodes}
        className="org-chart-container"
        id="my-custom-id-2"
        config={{
          nodeBinding: {
            img_0: "avatar",
            field_0: "name",
            field_1: "role",
          },
        }}
      />
    </div>
  );
}

export default App;
