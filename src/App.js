import { Switch, Route } from "react-router-dom";
import React, { useEffect, lazy, Suspense } from "react";
import CookieConsent from "react-cookie-consent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWeb3React } from "@web3-react/core";

import "./styles/app.sass";
import "./styles/custom.css";
import Page from "./components/Page";
import Spinner from "./components/Spinner/Spinner";
import { StatsContextProvider } from 'context/StatsContext';
import { useEagerConnect } from "utils/hooks/use-connectors";
import CONNECTOR_NAMES from "utils/constants/connectorNames";

const Home = lazy(() => import("./screens/Home"));
const UploadVariants = lazy(() => import("./screens/UploadVariants"));
const UploadDetails = lazy(() => import("./screens/UploadDetails"));
const UploadDetailsMultiple = lazy(() =>
  import("./screens/UploadDetailsMultiple")
);
const ConnectWallet = lazy(() => import("./screens/ConnectWallet"));
const Activity = lazy(() => import("./screens/Activity"));
const Faq = lazy(() => import("./screens/Faq"));
const Privacy = lazy(() => import("./screens/Privacy"));
const Terms = lazy(() => import("./screens/Terms"));
const Search01 = lazy(() => import("./screens/Search01"));
const Search02 = lazy(() => import("./screens/Search02"));
const Profile = lazy(() => import("./screens/Profile"));
const ProfileEdit = lazy(() => import("./screens/ProfileEdit"));
const Item = lazy(() => import("./screens/Item"));
const PageList = lazy(() => import("./screens/PageList"));
const Support = lazy(() => import("./screens/Support"));
const Register = lazy(() => import("./screens/register"));
const Form = lazy(() => import("./screens/form/form"));
const MyCollections = lazy(() => import("./screens/MyCollections"));
const EditCollection = lazy(() => import("./screens/EditCollection"));
const Collection = lazy(() => import("./screens/Collection"));
const RabpMint = lazy(() => import('./screens/rabp-mint/Mint'));
const LandMint = lazy(() => import('./screens/land-mint/Mint'));

const App = () => {
  const { account } = useWeb3React();
  const { login } = useEagerConnect(
    parseInt(localStorage.getItem("chainId")) || parseInt(process.env.REACT_APP_DEFAULT_CHAINID),
    CONNECTOR_NAMES.injected
  );

  useEffect(() => {
    if (!account && !!localStorage.getItem("chainId")) {
      login();
    }
  }, [account, login]);

  return (
    <>
      <StatsContextProvider>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route
              exact
              path="/"
              render={() => (
                <Page>
                  <Home />
                </Page>
              )}
            />
            <Route
              exact
              path="/upload-variants"
              render={() => (
                <Page>
                  <UploadVariants />
                </Page>
              )}
            />
            <Route
              exact
              path="/mint"
              render={() => (
                <Page>
                  <UploadDetails />
                </Page>
              )}
            />
            <Route
              exact
              path="/rabp-mint"
              render={() => (
                <Page>
                  <RabpMint />
                </Page>
              )}
            />
            <Route
              exact
              path="/land-mint"
              render={() => (
                <Page>
                  <LandMint />
                </Page>
              )}
            />
            <Route
              exact
              path="/upload-details-multiple"
              render={() => (
                <Page>
                  <UploadDetailsMultiple />
                </Page>
              )}
            />
            <Route
              exact
              path="/support"
              render={() => (
                <Page>
                  <Support />
                </Page>
              )}
            />
            <Route
              exact
              path="/register"
              render={() => (
                <Page>
                  <Register />
                </Page>
              )}
            />
            <Route
              exact
              path="/connect-wallet"
              render={() => (
                <Page>
                  <ConnectWallet />
                </Page>
              )}
            />

            <Route
              exact
              path="/faq"
              render={() => (
                <Page>
                  <Faq />
                </Page>
              )}
            />
            <Route
              exact
              path="/privacy-policy"
              render={() => (
                <Page>
                  <Privacy />
                </Page>
              )}
            />
            <Route
              exact
              path="/terms-conditions"
              render={() => (
                <Page>
                  <Terms />
                </Page>
              )}
            />
            <Route
              exact
              path="/activity"
              render={() => (
                <Page>
                  <Activity />
                </Page>
              )}
            />
            <Route
              exact
              path="/marketplace"
              render={() => (
                <Page>
                  <Search01 />
                </Page>
              )}
            />

            <Route
              exact
              path="/form-api"
              render={() => (
                <Page>
                  <Form />
                </Page>
              )}
            />
            <Route
              exact
              path="/search"
              render={() => (
                <Page>
                  <Search01 />
                </Page>
              )}
            />
            <Route
              exact
              path="/profile/:userId"
              render={() => (
                <Page>
                  <Profile />
                </Page>
              )}
            />
            <Route
              exact
              path="/profile"
              render={() => (
                <Page>
                  <Profile />
                </Page>
              )}
            />
            <Route
              exact
              path="/profile-edit"
              render={() => (
                <Page>
                  <ProfileEdit />
                </Page>
              )}
            />
            <Route
              exact
              path="/asset/:address/:tokenId"
              render={() => (
                <Page>
                  <Item />
                </Page>
              )}
            />
            <Route
              exact
              path="/pagelist"
              render={() => (
                <Page>
                  <PageList />
                </Page>
              )}
            />
            <Route
              exact
              path="/my-collections"
              render={() => (
                <Page>
                  <MyCollections />
                </Page>
              )}
            />
            <Route
              exact
              path="/edit-collection/:name"
              render={() => (
                <Page>
                  <EditCollection />
                </Page>
              )}
            />
            <Route
              exact
              path="/create-collection"
              render={() => (
                <Page>
                  <EditCollection />
                </Page>
              )}
            />
            <Route
              exact
              path="/collection/:name/:nftAddress"
              render={() => (
                <Page>
                  <Collection />
                </Page>
              )}
            />
          </Suspense>
        </Switch>
      </StatsContextProvider>
      {/* </Router> */}
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#202224" }}
        buttonStyle={{ color: "#1e1f1b", fontSize: "13px" }}
      >
        This website uses cookies to ensure you get the best experience on our
        website.
        {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
      </CookieConsent>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
