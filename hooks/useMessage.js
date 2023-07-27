import React from "react";

export const useMessage = () => {
  const [message, setMessage] = React.useState(null);

  const clear = () => {
    setMessage(null);
  };

  return {
    message,
    set: setMessage,
    clear,
  };
};
