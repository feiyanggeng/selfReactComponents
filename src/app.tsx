interface IProps {
  value: string
}

class App extends React.Component<IProps>{

  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  private getName = (): React.ReactNode => {
    const { value } = this.props;
    return value;
  }

  public render(): React.ReactNode{
    return <div>
      <h3>app</h3>
      {this.getName()}
    </div>;
  }
}

export default App;