import { FieldValue } from "firebase/firestore";

export interface IChatMessagesProps {
  createdAt: FieldValue;
  mid: string | null | undefined;
  text: string | null | undefined;
  uid: string | null | undefined;
  sid: string;
  sName: string;
  id?: string;
}
