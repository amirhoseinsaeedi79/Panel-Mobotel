import AddProduct from './Pages/AddProduct.jsx'
import AddUser from './Pages/AddUser.jsx'
import Comments from './Pages/Comments.jsx'
import EditProduct from './Pages/EditProduct.jsx'
import EditUser from './Pages/EditUser.jsx'
import Home  from './Pages/Home.jsx'
import Offers from './Pages/Offers.jsx'
import Orders from './Pages/Orders.jsx'
import RemoveProduct from './Pages/RemoveProduct.jsx'
import RemoveUser from './Pages/RemoveUser.jsx'
import Ticket from './Pages/Ticket.jsx'
let Routes =[
    { path:'/' , element:<Home/>},
    { path:'/AddProduct' , element:<AddProduct/>},
    { path:'/AddUser' , element:<AddUser/>},
    { path:'/Comments' , element:<Comments/>},
    { path:'/EditProduct' , element:<EditProduct/>},
    { path:'/EditUser' , element:<EditUser/>},
    { path:'/Offers' , element:<Offers/>},
    { path:'/Orders' , element:<Orders/>},
    { path:'/RemoveProduct' , element:<RemoveProduct/>},
    { path:'/RemoveUser' , element:<RemoveUser/>},
    { path:'/Ticket' , element:<Ticket/>},
]

export default Routes
