import React from 'react'
import err from '../../assets/errorpage.png'
import { Box } from '@mui/material'

function Nopage() {
  return (
    <Box
    component="img"
    src={err}
    sx={{ width: '100%',height:'100vh', }}
    alt="Example Image"
    m={'0 auto'}
    bgcolor={'white'}
    // padding={'.5rem'}
  />
  )
}

export default Nopage