interface IProps {
  className?: string
}

class Message extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  protected renderContent():React.ReactNode {
    return <div>renderContent{ this.context.name}</div>;
  }

  public render(): React.ReactNode {
    
    return <div>Message</div>;
  }
}

export default Message;