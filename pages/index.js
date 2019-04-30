import fetch from 'isomorphic-fetch'
import Error from 'next/error';
import StoryList from '../components/StoryList'
import { Layout } from "../components/Layout";
import Link from "next/link";

class Index extends React.Component {
    static async getInitialProps({query}) {
        let stories;
        let page;
        try {
            page = Number(query.page) || 1
            const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
            stories = await res.json()

        } catch (e) {
           console.log(e)
            stories = []
        }
        return {
            stories,
            page,
        }
    }
    render() {
        const { stories, page, } = this.props;

        if (stories.length === 0) {
            return <Error statusCode={503}/>
        }
        console.log('this', this.props.stories)
        return (
            <Layout
                title="Hacker Next"
                description="Hacker news clone made with next js"
            >
                    <StoryList stories={stories}/>
                    <footer>
                        <Link href={`/?page=${page + 1}`}>
                            <a>Next page</a>
                        </Link>
                    </footer>
                <style jsx>
                    {`
                        footer {
                            padding: 1em;
                            
                        }
                        footer a {
                            font-weight: bold;
                            color: black;
                            text-decoration: none;
                        }
                    `}
                </style>
            </Layout>
        )
    }
}


export default Index
