import { colors } from "../../../constants";

export interface ISubtitle {
  label: string;
}

export default function Subtitle(props: ISubtitle) {
  return <h4 style={{ color: colors.primaryText }}>{props.label}</h4>;
}
