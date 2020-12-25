interface IProps {
  className?: string
}

class Message extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): React.ReactNode {
    return <div>Message</div>;
  }
}

export default Message;