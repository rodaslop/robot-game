import { forwardRef } from "react";
import Box from "./Box";
import { User } from "lucide-react";

const REGEX = /\b(\w)/g;

const Avatar = forwardRef(function Avatar({ text }, ref) {
  const matches = text?.match(REGEX);
  const initials = matches?.join("");

  const Content = () => {
    if (initials) {
      return (
        <span className="text-blue-600 text-sm font-semibold">{initials}</span>
      );
    }

    return <User size={16} className="text-blue-600" />;
  };

  return (
    <Box
      ref={ref}
      className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-100 rounded-full cursor-pointer border border-blue-300"
    >
      <Content />
    </Box>
  );
});

export default Avatar;
