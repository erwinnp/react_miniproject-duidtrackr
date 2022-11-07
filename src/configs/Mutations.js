import { gql } from '@apollo/client';

export const DeleteTransaction = gql`
  mutation DeleteTransaction(
    $transactionID: Int!
    $categoryID: Int!
    $earningID: Int!
    $spendingID: Int!
  ) {
    delete_duidtrackr_transactions_by_pk(transactionID: $transactionID) {
      transactionID
    }
    delete_duidtrackr_categories_by_pk(categoryID: $categoryID) {
      categoryID
    }
    delete_duidtrackr_earnings_by_pk(earningID: $earningID) {
      earningID
    }
    delete_duidtrackr_spendings_by_pk(spendingID: $spendingID) {
      spendingID
    }
  }
`;

export const AddUserTransaction = gql`
  mutation AddNewTransaction(
    $transactionName: String = ""
    $transactionType: String = ""
    $categoryName: String = ""
    $earningAmount: Int = 10
    $spendingAmount: Int = 10
    $dateAdded: date = ""
    $userEmail: String = ""
    $earnEmail: String = ""
    $spendEmail: String = ""
  ) {
    insert_duidtrackr_transactions(
      objects: {
        transactionName: $transactionName
        transactionType: $transactionType
        category: { data: { categoryName: $categoryName } }
        earning: {
          data: { earningAmount: $earningAmount, earnEmail: $earnEmail }
        }
        spending: {
          data: { spendingAmount: $spendingAmount, spendEmail: $spendEmail }
        }
        dateAdded: $dateAdded
        userEmail: $userEmail
      }
    ) {
      returning {
        transactionID
        transactionName
        transactionType
        category {
          categoryName
        }
        earning {
          earningAmount
          earnEmail
        }
        spending {
          spendingAmount
          spendEmail
        }
        dateAdded
        userEmail
      }
    }
  }
`;

export const UpdateTheTransaction = gql`
  mutation UpdateTransaction(
    $transactionID: Int!
    $transactionName: String = ""
    $transactionType: String = ""
    $dateAdded: date = ""
    $categoryID: Int!
    $categoryName: String = ""
    $earningID: Int!
    $earningAmount: Int!
    $spendingID: Int!
    $spendingAmount: Int!
  ) {
    update_duidtrackr_transactions_by_pk(
      pk_columns: { transactionID: $transactionID }
      _set: {
        transactionName: $transactionName
        transactionType: $transactionType
        dateAdded: $dateAdded
      }
    ) {
      transactionName
      transactionType
      dateAdded
    }
    update_duidtrackr_categories_by_pk(
      pk_columns: { categoryID: $categoryID }
      _set: { categoryName: $categoryName }
    ) {
      categoryName
    }
    update_duidtrackr_earnings_by_pk(
      pk_columns: { earningID: $earningID }
      _set: { earningAmount: $earningAmount }
    ) {
      earningAmount
    }
    update_duidtrackr_spendings_by_pk(
      pk_columns: { spendingID: $spendingID }
      _set: { spendingAmount: $spendingAmount }
    ) {
      spendingAmount
    }
  }
`;

export const CreateAccount = gql`
  mutation CreateNewAccount(
    $fullName: String!
    $email: String!
    $password: String!
  ) {
    insert_duidtrackr_users(
      objects: {
        fullName: $fullName
        userEmail: $email
        userPassword: $password
      }
    ) {
      returning {
        userID
        fullName
        userEmail
        userPassword
      }
    }
  }
`;
