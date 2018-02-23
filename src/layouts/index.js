import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from "../components/Footer"
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <div style={{minHeight: '100%', paddingBottom: '60px'}}>
      <Helmet
        title="PeacockWeb"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <link rel="icon" type="image/png" src="/static/favicon.png"/>
      </Helmet>
        
      <Header />
      <div
        style={{
          margin: '0 auto',
          paddingTop: 0,
          paddingLeft: 0,
        }}
      >
        {children()}
      </div>
    </div>
  <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
