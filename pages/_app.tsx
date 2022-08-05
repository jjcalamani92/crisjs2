import '../src/styles/globals.css'

import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import request from 'graphql-request'
import { UiProvider } from '../src/context/ui/UiProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={
      {
        fetcher: (query: string, variables) =>
          request(`${process.env.APIS_URL}/graphql`, query, variables),
        revalidateOnFocus: false,
        // revalidateIfStale: false,
      }
    }>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </SWRConfig>
  )
}

export default MyApp
