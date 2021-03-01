import { ElementType } from "react";

interface IProps {
  component?: ElementType
  viewBox?: string
}

class BaseIcon extends React.PureComponent<IProps> {
  render(): React.ReactNode {
    const {
      children,
      component: Component = 'svg',
      viewBox = "0 0 1024 1024",
      ...others
    } = this.props;
    return (<Component width="1em" height="1em" fill='currentColor' viewBox={viewBox} {...others}>
      {children}
    </Component>);
  }
}

export default BaseIcon;