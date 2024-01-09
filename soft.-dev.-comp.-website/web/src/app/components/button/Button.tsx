export enum ButtonType {
  SUCCESS,
  DEFAULT,
  ERROR,
  WARNING,
}

export type PropsType = {
  content: string;
  type: ButtonType;
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button(props: PropsType) {
  return <button></button>;
}
