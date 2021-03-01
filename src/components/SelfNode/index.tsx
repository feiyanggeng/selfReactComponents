import { ElementType } from "react";

interface IProps {
  component: ElementType,
  width: string
}

class SelfNode extends React.PureComponent<IProps> {
  render(): React.ReactNode {
    const { component: Component = 'span', ...others } = this.props;
    console.log(others);
    
    return (<Component>
      hello word
    </Component>);
 }
}

export default SelfNode;