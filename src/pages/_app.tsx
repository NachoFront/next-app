import { NextPage } from 'next';
import { FC } from 'react';
import '../../styles/globals.css';

interface AppProps {
  Component: FC;
  pageProps: unknown;
}

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
