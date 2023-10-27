import { isShopifyError } from "../type-guards";
import { getCollectionsQuery } from "./Queries/collections";
import {
  Body,
  Collection,
  ShopifyCollection,
  ShopifyCollectionOperation,
} from "./types";
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const graphql = process.env.NEXT_PUBLIC_SHOPIFY_GRAPHQL_API_ENDPOINT!;
const endpoint = `https://${domain}${graphql}`;
const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
export async function shopifyFetch({
  cache = "force-cache",
  headers,
  query,
  tags,
  variables,
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: any;
}): Promise<{ status: number; body: any } | never> {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || "unknown",
        status: e.status || 500,
        message: e.message,
        query,
      };
    }

    throw {
      error: e,
      query,
    };
  }
}

export async function getCollection(
  handle?: string
): Promise<Body | undefined> {
  const res = await shopifyFetch({
    query: getCollectionsQuery,
  });
  return res;
}

const reshapeCollection = (
  collection: ShopifyCollection
): Collection | undefined => {
  if (!collection) {
    return undefined;
  }

  return {
    ...collection,
    path: `/search/${collection.handle}`,
  };
};
