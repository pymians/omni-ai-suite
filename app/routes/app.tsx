import type { HeadersFunction } from "@remix-run/node";
import { Link, Outlet, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";



export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

// loader fonksiyonunu tamamen sildik.

export default function App() {
  
  const apiKey = "6c20c4649112c6dacf04ec1e944e021d";

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <NavMenu>
        <Link to="/app" rel="home">
          Ana Panel
        </Link>
        <Link to="/app/additional">Ek Sayfa</Link>
      </NavMenu>
      <Outlet />
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};