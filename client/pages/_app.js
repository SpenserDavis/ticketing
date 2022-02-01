import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component {...pageProps} currentUser={currentUser} />
      </div>
    </div>
  );
};

//page component getInitialProps: context === {req, res}
//custom app component getInitialProps: context === {Component, ctx: {req, res}}
AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);

  const { data } = await client.get("/api/users/currentuser");
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  console.log(data);

  return { pageProps, currentUser: data.currentUser };
};

export default AppComponent;
