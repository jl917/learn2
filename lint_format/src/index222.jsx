import React from 'react'
import {render} from 'react-dom'
const App=()=>(
<div>
<div className="header">header</div>
<div className="body">body</div>
<div className="foot">foot</div>
</div>
)
render(<App />,document.getElementById('app'))