import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import './Home.css'

export default function Home() {
  return (
  <div className="Home_Background">
    <h1 className="Home_Title">Welcome!</h1>
    <div className="Home_Layout">
      <Stack spacing={3} direction="row">
      <Button variant="contained" href="/about">Discover</Button>
      <Button variant="contained" href="/contact">Connect</Button>
      </Stack>
    </div>
  </div>);
}