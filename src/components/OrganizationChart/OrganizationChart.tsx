import { useState } from "react";
import OrgNodeComponent from "./OrgNodeComponent";
import { orgData } from "../../data/orgData";
import { addNode } from "./OrgTreeUtils";

// Define OrgNode Type
export interface OrgNode {
  id: number;
  name: string;
  mainID?: string;
  departmentIds?: number[];
  departments?: OrgNode[];
  sectionIds?: number[];
  sections?: OrgNode[];
  unitIds?: number[];
  units?: OrgNode[];
  teamIds?: number[];
  teams?: OrgNode[];
}

export default function OrganizationChart() {
  const [data, setData] = useState<OrgNode[]>(orgData);

  // Add a New Child Node with Details
  const addChild = (
    parentId: number,
    level: keyof OrgNode,
    name: string,
    id: number
  ) => {
    console.log(`Adding child to ${name} (ID: ${id}) at level: ${level}`);

    const newNode: OrgNode = {
      id: Date.now(),
      name: `New ${level}`,
      mainID: `NEW${Date.now()}`,
    };

    setData((prev) => addNode(prev, parentId, newNode, level));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        Phân Ban
        <div style={{color: "green"}} onClick={() => addChild(0, "departments", "Phân Ban", 0)}>+</div>
      </h2>
      <div className="mt-4">
        {data.map((division) => (
          <OrgNodeComponent
            key={division.id}
            node={division}
            addChild={addChild}
            level={1}
          />
        ))}
      </div>
    </div>
  );
}
