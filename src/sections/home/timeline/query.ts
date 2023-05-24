import { gql } from "@apollo/client";

export const GET_TIMELINE = gql`
  query GetTimeline($keyword: String!, $page: Int, $perPage: Int) {
    getTimeline(keyword: $keyword, page: $page, perPage: $perPage) {
      id
      description
      imageUrl
      url
    }
  }
`;
