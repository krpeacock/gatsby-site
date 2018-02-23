import React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'
import Container from '../../components/Container'

const Banner = glamorous.div({
  width: `100vw`,
  height: '20em',
  backgroundImage: "url(/static/blog_banner.jpg)"
})

const Blog = () => (
  <div>
    <Banner/>
    <Container>
      <h1>Hi from the blog page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </div>
)

export default Blog
