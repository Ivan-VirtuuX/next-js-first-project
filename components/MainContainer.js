import Head from 'next/head';
import A from './A';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'virtuux, next js' + keywords}></meta>
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text="Main" />
        <A href={'/users'} text="User" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: cornflowerblue;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
