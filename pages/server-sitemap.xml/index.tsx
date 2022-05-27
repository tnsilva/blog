import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import getPosts from '../../lib/posts'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getPosts()

  const fields = posts.map(({ slug }) => ({
    loc: `https://blogtn.vercel.app/${slug}`,
    lastmod: new Date().toISOString(),
    // changefreq
    // priority
  }))

  return getServerSideSitemap(ctx, fields)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
