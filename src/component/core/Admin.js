import { Box } from '@mui/material'
import React from 'react'
import {BrowserRouter as  Router } from 'react-router-dom'
import AppRoutes from '../../Routes'
import { Colors } from '../../styles/theme'

const Admin = () => {
  return (
<Box sx={{
    display:"flex",
    bacground:Colors.background,
    height:'100vh',

}}>
    <Router>
        <AppRoutes/>
    </Router>
</Box>
  )
}

export default Admin