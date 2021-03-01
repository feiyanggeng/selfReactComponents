import { combineClassNames } from "utils";
import ButtonLess from "./button.less";

interface ButtonProps {
  className?: string,
  type: 'default' | 'primary' | 'link' | 'dash'
}

class Button extends React.PureComponent<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  public render(): React.ReactNode {
    const { type, children, className } = this.props;
    return (<div className={combineClassNames(ButtonLess.container, ButtonLess[type], className)}>
      {children || "button"}
      </div>);
  }
}

export default Button;