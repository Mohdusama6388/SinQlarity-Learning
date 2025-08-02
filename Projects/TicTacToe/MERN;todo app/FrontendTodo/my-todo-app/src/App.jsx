import Adduser from './Components/Adduser'
import Edituser from './Components/Edituser'
import Homepage from './Components/Homepage'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'

function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<Homepage/>
  },
  {
    path:"/Adduser",
    element:<Adduser/>
  },
  {
    path:"/Edituser",
    element:<Edituser/>
  },
  {
    path:"*",
    element:<div>page not found</div>
  }
]);
return <RouterProvider router={router}/>
}
export default App

