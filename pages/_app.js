import { Layout } from '@/components'
import { StateContextProvider } from '@/context/stateContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StateContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContextProvider>
  )
}
