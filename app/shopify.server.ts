import "@shopify/shopify-app-remix/adapters/node";
import {
  AppDistribution,
  shopifyApp,
  LATEST_API_VERSION,
} from "@shopify/shopify-app-remix/server";
import { RedisSessionStorage } from "@shopify/shopify-app-session-storage-redis";

// Bu Redis bağlantısı, Vercel'e eklediğimiz yeni UPSTASH_... değişkenlerini otomatik olarak kullanacaktır.
const sessionStorage = new RedisSessionStorage(
  process.env.UPSTASH_REDIS_URL || "redis://localhost:6379"
);

const shopify = shopifyApp({
  apiKey: "6c20c4649112c6dacf04ec1e944e021d",
  apiSecretKey: "27f38192921ce06d9667f19423c5c80a",
  appUrl: "https://omni-ai-suite.vercel.app",
  scopes: ["read_products", "read_products,read_customers,read_orders,write_marketing_events"],
  
  sessionStorage, // YENİ VERİTABANI AYARI

  distribution: AppDistribution.AppStore,
  authPathPrefix: "/api/auth",
  isEmbeddedApp: true,
  apiVersion: LATEST_API_VERSION,
  future: {
    unstable_newEmbeddedAuthStrategy: true,
  },
  ...(process.env.SHOP_CUSTOM_DOMAIN
    ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
    : {}),
});

export default shopify;
export const apiVersion = LATEST_API_VERSION;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate = shopify.authenticate;
export const unauthenticated = shopify.unauthenticated;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
// export const sessionStorage = shopify.sessionStorage; 