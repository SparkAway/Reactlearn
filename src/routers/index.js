import Count from "../containers/Count";
import {Navigate} from "react-router-dom";
import Test from "../components/Test";
import MapA from "../components/Map";
export default [
    {
        path:'/math',
        element:<Count/>
    },
    {
        path: '/map',
        element: <MapA/>
    },
    {
      path:'/test',
      element:<Test/>
    },
    {
        path: '/',
        element: <Navigate to="/math"/>
    }
]
