import Head from "next/head";
import Link from "next/link";

import "../style/index.css";
import "../style/list.css";
import "../style/post.css";

function App({ Component, pageProps }) {
  return (
    <>
      {/* Head title */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Victor Taelin's blog"></meta>
        <title>Victor Taelin's Blog</title>
      </Head>
      {/* Body */}
      <div className="app-wrapper">
        {/* Logo */}
        <div className="nav-wrapper">
          <Link as={`/`} href={`/`} passHref>
            <div className="logo-wrapper">
              <div className="mobile-hidden">
                <span>Victor Taelin's Blog</span>
              </div>
            </div>
          </Link>
        </div>
        {/* Anything below logo */}
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default App;
