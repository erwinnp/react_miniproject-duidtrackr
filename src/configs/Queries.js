import { gql } from '@apollo/client';

export const GetAllTransaction = gql`
  query GetTransaction {
    duidtrackr_transactions {
      transactionID
      transactionName
      transactionType
      category {
        categoryID
        categoryName
      }
      earning {
        earningID
        earningAmount
      }
      spending {
        spendingID
        spendingAmount
      }
      dateAdded
      userEmail
    }
  }
`;

export const sumSpendings = gql`
  query sumUserSpendings($userEmail: String = "") {
    duidtrackr_spendings_aggregate(where: { spendEmail: { _eq: $userEmail } }) {
      aggregate {
        sum {
          spendingAmount
        }
      }
    }
  }
`;

export const sumEarnings = gql`
  query sumUserEarnings($userEmail: String = "") {
    duidtrackr_earnings_aggregate(where: { earnEmail: { _eq: $userEmail } }) {
      aggregate {
        sum {
          earningAmount
        }
      }
    }
  }
`;

export const getAccount = gql`
  query GetAccount($email: String!, $password: String!) {
    duidtrackr_users(
      limit: 1
      where: { userEmail: { _eq: $email }, userPassword: { _eq: $password } }
    ) {
      userID
      fullName
      userEmail
      userPassword
    }
  }
`;
