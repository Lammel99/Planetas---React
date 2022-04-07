import React, { useContext } from "react";

export const MessageContext = React.createContext({
  message: null,
  setMessage: () => {},
});

export const MessageProvider = (props) => {
  const [message, setMessage] = React.useState({ content: null, display: false });

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {props.children}
    </MessageContext.Provider>
  );
};

export function useMessage() {
  const context = useContext(MessageContext);
  const { message, setMessage } = context;

  return {
    message,
    setMessage,
  };
}
