import { SetStateAction } from "react";

export interface IPanelContainer {
  infringement: IInfringement;
  setInfringement: any,
  visibile?: boolean;
  setModalVisible?: any;
}

export interface IInfringement extends IStateReact{
  id: number;
  name: string;
  schedulingDate: String;
  time: string;
  cubicleNumber: number;
  shiftNumber: number;
  type: string,
  processNumber: string
}

export interface IStateReact{
  setStep?: any;
}
