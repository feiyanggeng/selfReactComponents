interface IProps {
  value: string
}

const test = {
  a: 1
};

class App extends React.Component<IProps>{

  constructor(props: IProps) {
    super(props);
    console.log(_.get(test, 'a'));
    this.state = {}
  }

  private getName = (str: string): React.ReactNode => {
    const { value } = this.props;
    return value
  }

  public render(): React.ReactNode{
    return <div>{ this.getName('app') }</div>;
  }
}

export default App;