import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
        <Html lang="en">
            <Head>
                <meta name="author" content="Chinmay Patel" />
                <meta name="description" content="Personal portfolio" />
                <meta name="keywords" content="Full Stack Developer, MERN, Portfolio, NextJS" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet" />
            </Head>
            <body className="bg-gradient-to-r from-customGreen to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    };
}

export default MyDocument;