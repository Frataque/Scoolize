import React from "react";
import { IChatMessagesProps } from "../../interface/chatMessages";
import MessageInput from "../../components/InputChat";
import { useChat } from "../../context/ChatContext";
import ChatMessages from "../../components/ChatMessages";

export interface IConversationProps {
  conv: Array<IChatMessagesProps>;
}

const Conversation: React.FunctionComponent<IConversationProps> = (props) => {
  const { conv } = useChat();
  return (
    <>
      <div className="w-full flex flex-col justify-between">
        <div className="flex-none">
          {props.conv[0] && (
            <h1 className="text-black text-2xl font-medium font-marianne-medium leading-tight ">
              {props.conv[0].sName}
            </h1>
          )}
          <div className="w-full h-0.5 relative mt-2">
            <div className="w-full h-0.5 left-0 top-0 absolute bg-dark-blue" />
          </div>
        </div>
        <div className="pt-10 flex-1 max-h-[600px] overflow-y-scroll">
          <div className="h-[200vh] flex flex-col justify-end">
            {conv &&
              conv.map((con) => {
                return <ChatMessages message={con} />;
              })}
          </div>
        </div>
        <div className="w-full flex-none">
          <MessageInput message={props.conv[0]} />
        </div>
      </div>
    </>
  );
};

export default Conversation;
