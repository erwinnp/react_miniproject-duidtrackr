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
    }
  }
`;

export const sumSpendings = gql`
  query sumAllSpendings {
    duidtrackr_spendings_aggregate {
      aggregate {
        sum {
          spendingAmount
        }
      }
    }
  }
`;

export const sumEarnings = gql`
  query sumAllEarnings {
    duidtrackr_earnings_aggregate {
      aggregate {
        sum {
          earningAmount
        }
      }
    }
  }
`;
