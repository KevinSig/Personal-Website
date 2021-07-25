import React from 'react'
import { createClient } from 'contentful'
import Head from 'next/head'
import BlogCard from '../../components/BlogCard'
import styled from 'styled-components'

export async function getStaticProps() {
  //this is the function to grab data and inject that as props
  // this connects to the speci contentful space

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, //porcess is from the vs code itself
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'blogPost' })

  return {
    props: {
      blogPost: res.items,
    },
    revalidate: 1,
  }
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 60px;
`

function blog({ blogPost }) {
  console.log(blogPost)
  return (
    <>
      <Head>
        <title>Amir Sigari | Blog</title>
      </Head>
      <div>This is a blog</div>
      <Grid>
        {blogPost.map(post => (
          <BlogCard key={post.sys.id} recipe={post} />
        ))}
      </Grid>
    </>
  )
}

export default blog
