import { gql } from '@apollo/client';

export const GetTransactionSubs = gql`
  subscription GetTransaction {
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
