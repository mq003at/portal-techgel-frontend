import React, { useState } from "react";
import { OrgNode } from "./OrganizationChart";

interface Props {
  node: OrgNode;
  addChild: (
    parentId: number,
    level: keyof OrgNode,
    name: string,
    id: number
  ) => void;
  level: number;
}

const OrgNodeComponent: React.FC<Props> = ({ node, addChild, level }) => {
  const [isExpanded, setIsExpanded] = useState(false); // ✅ Track expansion per node

  // ✅ Expand/Collapse Only Direct Children
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div
      className="border-l-2 border-gray-300 mt-2"
      style={{ marginLeft: level * 20 }}
    >
      <div className="flex items-center gap-2">
        {/* Expand/Collapse Button (Only when there are child elements) */}
        {(node.departments || node.sections || node.units || node.teams) && (
          <div
            className="btn-outline hover:cursor-pointer dropdown-button"
            onClick={toggleExpand} // ✅ Only toggles direct child elements
          >
            {isExpanded ? "🔽" : "▶️"}
          </div>
        )}

        {/* Node Name */}
        <span className="font-medium">{node.name}</span>

        {/* Add Child Button */}
        {node.teams === undefined && (
          <div
            // onClick={() =>
            //   addChild(node.id, getNextLevelKey(node), node.name, node.id)
            // }
          >
           <p style={{color: "green", fontSize: "20px"}}>+</p> 
          </div>
        )}
      </div>

      {/* ✅ Only Render Direct Children if Expanded */}
      {isExpanded &&
        (node.departments || node.sections || node.units || node.teams)?.map(
          (child) => (
            <OrgNodeComponent
              key={child.id}
              node={child}
              addChild={addChild}
              level={level + 1} // ✅ Increase indent for child elements
            />
          )
        )}
    </div>
  );
};

// Function to determine the next level key dynamically
// const getNextLevelKey = (node: OrgNode): keyof OrgNode => {
//   if (node.departments !== undefined) return "departments";
//   if (node.sections !== undefined) return "sections";
//   if (node.units !== undefined) return "units";
//   if (node.teams !== undefined) return "teams";
//   return "teams"; // Default to prevent errors
// };

export default OrgNodeComponent;
