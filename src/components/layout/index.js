import { Helmet } from 'react-helmet'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './../Header'
import Footer from './../Footer'

require('normalize.css')

import '../../assets/stylesheets/application.sass'

class Layout extends Component {
  render() {
    const { children } = this.props
    return(
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
              <meta name="google-site-verification" content="" />
              <meta name="theme-color" content="#ffffff" />
            </Helmet>
            <div className="">
              <Header />
              { children }
              <Footer />
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
