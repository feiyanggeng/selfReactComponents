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
    const { className } = this.props;
    console.log('button',ButtonLess);
    
    return (<div className={ButtonLess.container}>
        <button className={ className }>按钮</button>
      </div>);
  }
}

export default Button;