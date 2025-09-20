import gql from "graphql-tag";

export const GET_POST = gql`
    query GetPost($id: ID!) {
      post(id: $id) {
        id
        title
        content
        author {
          id
          name
          email
        }
        createdAt
      }
    }
  `;
