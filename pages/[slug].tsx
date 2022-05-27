import getPosts from '../lib/posts'
import ReactMarkdown from 'react-markdown'
import { GetStaticProps } from 'next'

interface PostProps {
  title: string
  date: string
  markdown: string
}

const Post = ({ title, date, markdown }: PostProps) => (
  <article>
    <h1>{title}</h1>
    <time className="font-extralight tracking-wider text-gray-500">{date}</time>
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </article>
)

export const getStaticPaths = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map((post) => `/${post.slug}`),
    fallback: false,
  }
}

interface ParamsProps {
  params: { slug: string }
}

export const getStaticProps = async ({ params }: ParamsProps) => {
  const posts = await getPosts()

  const { slug } = params
  const post = posts.find((post) => post.slug === slug)

  return { props: { post } }
}

export default Post
