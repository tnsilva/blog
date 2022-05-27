import Head from 'next/head'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Meu blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-blue-500 to-blue-500 py-2 text-center">
        <Link href="/">
          <a>
            <h2 className="text-3xl font-bold text-white">
              Blog do @thalisson.dev
            </h2>
          </a>
        </Link>
      </header>

      <div className="container mx-auto flex  flex-col px-4">
        <main className="flex-2 prose mx-6 my-auto rounded p-6  lg:prose-xl">
          {children}
        </main>
      </div>

      {/* <footer>
        <h2 className="py-2 text-center">Meu blog</h2>
      </footer> */}
    </>
  )
}
