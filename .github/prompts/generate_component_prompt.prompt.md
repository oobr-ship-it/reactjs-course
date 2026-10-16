---
name: generate_component_prompt
description: Creates a boilerplate React functional component.
---

Create a new React component based on the filename or my request. 

Component requirements:
- It must be a Functional Component (use `function ComponentName() {}`).
- Destructure `props` directly in the function signature.
- Include a basic `return` statement with a root `div` element or an empty fragment `<></>`.
- Add an `export default ComponentName;` at the very bottom of the file.
- Strictly follow the project styling rules: 2 spaces for indentation and mandatory semicolons.

Expected output example:

```jsx
import React from 'react';

function ComponentName({ someProp }) {
  return (
    <div>
      {/* Content goes here */}
    </div>
  );
}

export default ComponentName;
```