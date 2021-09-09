import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import './Footer.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (<div className="Footer_Background">
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={3}>
        <p className="Footer_Heading">About us</p>
        <a className="Footer_Content">My name is Mark, a computer science student, space technology lab member, and a Microsoft Learn Student Ambassador</a>
      </Grid>
      <Grid item xs={3}>
        <p className="Footer_Heading">Connect</p>
        <a className="Footer_Link" href="https://www.instagram.com/mark.chen.sstm/">Instagram</a>
        <a className="Footer_Link" href="https://www.facebook.com/mark.chen.sstm">Facebook</a>
        <a className="Footer_Link" href="https://www.youtube.com/channel/UCkPWNhP80z41tEDvuCMSfGQ">YouTube</a>
        <a className="Footer_Link" href="https://www.linkedin.com/in/markchen-cs-entrepreneur/">LinkedIn</a>
      </Grid>
      <Grid item xs={3}>
        <p className="Footer_Heading">Infomation</p>
        <a className="Footer_Content">Find out more at contact page</a>
      </Grid>
      </Grid>
  </div>
  );}