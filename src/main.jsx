import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from "./router/router.jsx";
import BaseLayout from "./components/BaseLayout.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={ router } >
        <React.StrictMode>
            <BaseLayout />
        </React.StrictMode>
    </RouterProvider>
)
