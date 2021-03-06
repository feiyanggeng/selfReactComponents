import App from "./app";

const Context = React.createContext({});

function TestContext(props: { value: any, children?: React.ReactNode }) {
  const { value, children } = props;
  return <Context.Provider value={value}>
    <Context.Consumer>
      {() => <div>
        {children}
      </div> }
    </Context.Consumer>
  </Context.Provider>;
}

ReactDOM.render(
  <TestContext value={{name: 'provider'}}>
    <App value="this is a test" />
  </TestContext>
  , document.getElementById('root'));