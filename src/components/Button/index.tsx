import React from "react";

interface ButtonProps {
  className?: string,
  type: 'default' | 'primary' | 'link' | 'dash'
}

class Button extends React.PureComponent<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  public render(): React.ReactNode {
    return <button>按钮</button>;
  }
}

export default Button;