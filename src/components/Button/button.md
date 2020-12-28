---
name: Button
menu: Components
---

import Button from './index'
import { Playground, Props } from "docz";

# Button

### Button Props ##
<Props of={Button} />

### Button example ###

this is button page
<Playground>
  <Button />
</Playground>

## Counter ##
<Playground>
{() => {
  const [count, setCount] = React.useState(0)
  return (<>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <p>{count}</p>
  </>)
}}
</Playground>
