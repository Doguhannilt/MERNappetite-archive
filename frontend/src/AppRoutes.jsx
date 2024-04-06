import {Routes, Route, Navigate} from 'react-router-dom'
import Layout from './layouts/layout'
import HomePage from './pages/HomePage'
import EditProfile from './components/EditProfile'
import { useAuth0 } from '@auth0/auth0-react'


const AppRoutes = () => {

    return(
        <Routes>
            <Route  path = "/" element={<Layout><HomePage /></Layout>}/>
            <Route  path = {`/user-profile/:email`} element={<Layout><EditProfile/></Layout>}/>
            <Route  path = "*" element={<Navigate to="/" />}/>
        </Routes>
    )
}
export default AppRoutes