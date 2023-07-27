import { Loader2 } from "lucide-react";

export default function Loading({ size = 30 }) {
  return <Loader2 size={size} className="animate-spin text-blue-600" />;
}
