export interface VirtualElement {
  type: string | Function;
  props: Record<string, any>;
  children: (VirtualElement | string)[];
}

export interface HeaderProps {
  title: string;
  buttonText: string;
}

export interface ContentProps {
  text: string;
}
