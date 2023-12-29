import React from "react";
import { IChatMessagesProps } from "../../../interface/chatMessages";
import acceptConv from "../../../functions/AcceptConv";
interface IConvCard {
  conv: IChatMessagesProps;
}
const ConvCard: React.FunctionComponent<IConvCard> = ({ conv }) => {
  return (
    <>
      <div className="p-4 w-1/4 h-[200px] bg-lightlight-blue border-b-2 border-dark-blue flex flex-col justify-between ">
        {conv.text}
        <button
          className=" text-dark-blue hover:text-white font-marianne font-semibold p-2 hover:bg-dark-blue"
          onClick={(e) => acceptConv(conv.mid, conv.id)}
        >
          Répondre
        </button>
      </div>
    </>
  );
};

export default ConvCard;
