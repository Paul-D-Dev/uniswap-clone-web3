import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TransactionProvider } from '../context/TransactionContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  // Wrap the app in the TransactionProvider to access global state
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  )
}

export default MyApp
