import Message from "components/Message";

class MyMessage extends Message{

  public render(): React.ReactNode {
    return <div>myMessage { this.renderContent()}</div>;
  }
}

export default MyMessage;