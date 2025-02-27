import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="PVX is an active community of friends and easy going people enthusiastically engaged in mutual transaction of ideas spanning over a spectrum of headers ranging from your typical Bakchodi to some serious Crypto and Technology..."
        />
        <meta
          name="keywords"
          content="PVX,pvx family,pvx birthday,stats,donate,gdrive,pvx website,pvx webpage,pvx community,pvx bot,whatsapp group,whatsapp bot,insta downloader,youtube downloader,movies,series,technology,news,programming,crypto,stocks,anime,sports,sticker,bot,study,meme,gaming,automobile,astronomy,space,bgmi,coc,status,pvx whatsapp group,pvx telegram group,pvx telegram channel,pvx facebook group,pvx discord channel"
        />
        <meta
          property="og:image"
          content="https://github.com/Shubhamrawat5/PVX_webpage/blob/main/src/asserts/images/main.jpg?raw=true"
        />
        <meta property="og:title" content="PVX" />
        <meta
          property="og:description"
          content="PVX is an active community of friends and easy going people enthusiastically engaged in mutual transaction of ideas spanning over a spectrum of headers ranging from your typical Bakchodi to some serious Crypto and Technology..."
        />
        <meta property="og:URL" content="https://pvxcommunity.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="sJN2MPzgDpzPOlooLsyGEpQUDoaPdXM9OYMBoCGuzHU"
        />
        <title>PVX</title>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VN9V7K8V4P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag("config", "G-VN9V7K8V4P");
        `}
      </Script>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
