import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Poppins } from 'next/font/google'
config.autoAddCss = false

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400'
})

function MyApp({ Component, pageProps }) {
    <main className={poppins.className}>
        return <Component {...pageProps} />
    </main>

}

export default MyApp