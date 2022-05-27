import Link from 'next/link'
import getPosts from '../lib/posts'

type Post = {
  slug: string
  title: string
}

interface PostsProps {
  posts: Post[]
}
const Blog = ({ posts }: PostsProps) => {
  return (
    <>
      <h1>Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  }
}
export default Blog
