import "../styles/tailwind-globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" flex justify-center items-center flex-col">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
