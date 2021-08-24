import { CurrentDateProvider } from "../hooks/useCurrentDate";
import "../styles/tailwind-globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CurrentDateProvider>
      <div className="h-screen">
        <Component {...pageProps} />
      </div>
    </CurrentDateProvider>
  );
}

export default MyApp;
