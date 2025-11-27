import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <App />
  </React.StrictMode>,
) 
export default {
  port: 3000,
  fetch(req: Request) {
    if (new URL(req.url).pathname === "/") {
      return new Response("The server running!");
    }
    return new Response("Not Found", { status: 404 });
  }
}
