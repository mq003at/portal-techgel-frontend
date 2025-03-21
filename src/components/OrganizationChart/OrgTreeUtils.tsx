import { OrgNode } from "./OrganizationChart";

// Toggle Expand/Collapse
export const toggleExpand = (
  expandedNodes: Set<number>,
  id: number
): Set<number> => {
  const newSet = new Set(expandedNodes);
  newSet.has(id) ? newSet.delete(id) : newSet.add(id);
  return newSet;
};

// Recursively Add a Node
export const addNode = (
  nodes: OrgNode[],
  parentId: number,
  newNode: OrgNode,
  level: keyof OrgNode
): OrgNode[] =>
  nodes.map((node) =>
    node.id === parentId
      ? {
          ...node,
          [level]: [...((node[level] as OrgNode[]) || []), newNode],
        }
      : {
          ...node,
          departments: addNode(
            node.departments || [],
            parentId,
            newNode,
            level
          ),
          sections: addNode(node.sections || [], parentId, newNode, level),
          units: addNode(node.units || [], parentId, newNode, level),
          teams: addNode(node.teams || [], parentId, newNode, level),
        }
  );
