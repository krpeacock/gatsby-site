import React from 'react'
import Link from 'gatsby-link'

const wellStyles = {
  backgroundColor: "#f9fafb",
  borderTop: '1px solid #e6e9eb',
  borderBottom: '1px solid #e6e9eb',
  fontFamily: 'Roboto',
  fontWeight: '300',
  padding: '30px',
  textAlign: 'center',
  color: '#8496b3',
  width: '100vw',
  position: 'relative',

}

const IndexPage = () => (
  <div>
    <div style={wellStyles}>
      <h2 style={{color:'#415161'}}>Creative Developer</h2>
      <p style={{maxWidth: '960px', margin: 'auto'}}>My name is Kyle Peacock, and I'm a full-stack web developer and marketing specialist.
      Node.js, Express, React.js, and Graphql are my go-to prototyping stack, 
      ​and I have worked with a number of older web frameworks for legacy sites.</p>
    </div>
    <div style={{padding: '0px 1.0875rem 1.45rem', maxWidth: '960px', display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: 'auto', marginTop: '1.5em' }}>
      <table style={{margin: 'auto'}}>
        <tr>
          <td>
            <h3 style={{fontFamily: 'Roboto'}}>JavaScript</h3>
            <p style={{fontFamily: 'Roboto'}}>Every day, JavaScript is taking on a more important role in enabling the modern web. I'm one of many developers who believe in driving the language forward as we get closer to having a "write once, run anywhere" tool that is a delight to program in.</p>
          </td>
          <td>
            <h3 style={{fontFamily: 'Roboto'}}>Full Stack</h3>
            <p style={{fontFamily: 'Roboto'}}>Businesses today demand a developer who understands how all the parts of a web application fit together. I can work on any stage of development on a web application, from hosting and database configuration to front-end design frameworks.</p>
          </td>
          <td>
            <h3 style={{fontFamily: 'Roboto'}}></h3>
            <p style={{fontFamily: 'Roboto'}}></p>
          </td>
          <td>
            <h3 style={{fontFamily: 'Roboto'}}></h3>
            <p style={{fontFamily: 'Roboto'}}></p>
          </td>
        </tr>
      </table>
    </div>
  </div>
)

export default IndexPage
