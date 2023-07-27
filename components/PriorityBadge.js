import React from "react";
import Badge from "@/components/Badge";

const PRIORITY_COLORS = {
  low: "blue",
  medium: "yellow",
  high: "red",
};

export default function PriorityBadge({ children }) {
  return (
    <Badge className="capitalize" variant={PRIORITY_COLORS[children || "blue"]}>
      {children}
    </Badge>
  );
}
