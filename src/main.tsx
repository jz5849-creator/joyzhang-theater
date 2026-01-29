import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 移除默认的 import './index.css'，因为我们直接在 index.html 里用了 CDN
// 这里的 import 是可选的，如果你想写自定义 CSS 可以在 index.css 里写

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)