import "../styles/globals.scss";
import Script from "next/script";

{
  /* <script async src="https://www.googletagmanager.com/gtag/js?id=G-H16MTVW4PF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-H16MTVW4PF');
</script> */
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-H16MTVW4PF`}
      />

      <Script id="my-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-H16MTVW4PF');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
