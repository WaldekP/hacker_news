import Link from "next/link"
import Head from "next/head"
import Router from 'next/router';

export const Layout = ({children, title, description, backButton}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>
        <div className="container">
            <nav>
                {backButton && <span onClick={() => Router.back()}>Back</span>}
                <Link href="/">
                    <a>
                        <span className="main-tilte">Hacker next</span>
                    </a>
                </Link>
            </nav>
            {children}
        </div>
        <style jsx>
            {`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background: #f6f6ef
                }
                nav {
                    background: #f60;
                    padding: 1em;
                }
                nav > * {
                    display: inline-block;
                    color: black
                }
                nav a {
                    text-decoration: none;
                }
                
                nav .main-title {
                    font-weight: bold;
                }
            `}
        </style>
        <style global jsx>
            {`
                .body {
                    background: white;
                    font-family: Verdana, Geneva, san-serif;
                }
               
            `}
        </style>
    </div>
)

