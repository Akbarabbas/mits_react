import React, {Fragment} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App1 from './App1'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  <App name='Akbarabbas' designation='Senior Software Developer'></App>
  <App1 name='Akbarabbas' designation='Senior Software Developer'></App1>
  </div>
)
