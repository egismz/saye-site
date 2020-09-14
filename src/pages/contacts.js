import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const useStyles = makeStyles({
  root: {
    minHeight: '70vh',
    marginTop: '1rem',
    padding: '1.5rem',
  },
  title: {
    fontFamily: 'Cuprum',
    textTransform: 'uppercase',
  },
  address: {
    '& p > a': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '& p > a:hover, a:active': {
      textDecoration: 'underline',
      color: '#757575',
    },
  },
})

export default function Contacts() {
  const classes = useStyles()

  return (
    <Layout>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Paper className={classes.root} component="main" square>
            <Grid container spacing={2}>
              <Grid component="section" item xs={12} md={6}>
                <Typography className={classes.title} variant="h5" gutterBottom>
                  Our Location
                </Typography>
                <p>Google Map</p>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid component="section" item xs={12} md={6}>
                <ContactForm />
              </Grid>

              <Grid component="section" item xs={12} md={6}>
                <Typography className={classes.title} variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Box mt={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    We are open for you emails, questions and suggestions on:
                  </Typography>

                  <p>
                    <strong>Monday - Friday: </strong>8.30 am - 5.30 pm
                    <br />
                    <strong>Saturday: </strong>
                    9.00 am - 2.00 pm
                    <br />
                    <strong>Sunday: </strong>
                    Closed
                  </p>

                  <Box
                    className={classes.address}
                    component="address"
                    fontStyle="normal"
                  >
                    <p>
                      <strong>Saye Ltd.</strong>
                      <br /> 15 Gregory Rd Hannibal, <br />
                      New York(NY), 13074
                    </p>
                    <p>
                      Telephone: <a href="tel: #"> (315) 564-7350</a>
                    </p>
                    <p>
                      E-mail: <a href="mailto: #">mail@demolink.org</a>
                    </p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}
