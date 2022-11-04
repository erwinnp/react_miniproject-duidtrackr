import React, { useState } from 'react';
import Modal from '../Modal';

const ListHistory = ({
  deleteTransaction,
  refetchEarn,
  refetchSpend,
  transaction,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <tr className='bg-white border-b border-color-dark text-color-dark text-[16px]'>
      <th scope='row' className='py-4 px-6 font-medium'>
        {transaction.transactionName}
      </th>
      {transaction.transactionType === 'Spending' ? (
        <td className='py-4 px-6'>
          <p className='text-white bg-color-danger text-center p-1 rounded-md uppercase'>
            {transaction.transactionType}
          </p>
        </td>
      ) : (
        <td className='py-4 px-6'>
          <p className='text-white bg-color-primary text-center p-1 rounded-md uppercase'>
            {transaction.transactionType}
          </p>
        </td>
      )}
      <td className='py-4 px-6'>{transaction.category.categoryName}</td>
      {transaction.transactionType === 'Spending' ? (
        <td className='py-4 px-6 text-color-danger font-semibold'>
          Rp. {transaction.spending.spendingAmount}
        </td>
      ) : (
        <td className='py-4 px-6 text-color-primary font-semibold'>
          Rp. {transaction.earning.earningAmount}
        </td>
      )}
      <td className='py-4 px-6'>{transaction.dateAdded}</td>
      <td className='py-4 px-6 flex'>
        <button
          className='btn btn-secondary mr-3'
          onClick={() => setShowModal(!showModal)}
        >
          Edit
        </button>
        <Modal
          isVisible={showModal}
          onClose={() => setShowModal(!showModal)}
          transaction={transaction}
        />
        <button
          className='btn btn-danger'
          onClick={() => {
            deleteTransaction(
              transaction.transactionID,
              transaction.category.categoryID,
              transaction.earning.earningID,
              transaction.spending.spendingID
            );
            refetchEarn;
            refetchSpend;
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListHistory;