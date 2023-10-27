import productFragment from "../Fragments/product";
import seoFragment from "../Fragments/seo";

const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    updatedAt
    products(first: 10) {
      edges {
        node {
          ...product
        }
      }
    }
  }

  ${productFragment}
`;

export const getCollectionsQuery = /* GraphQL */ `
  query getCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`;
