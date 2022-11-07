import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../store/features/modalSlice';
import Modal from '../Modal';
import ModalDelete from '../ModalDelete';

const ListHistory = ({
  deleteTransaction,
  refetchEarn,
  refetchSpend,
  transaction,
}) => {
  const { isVisible } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const [modalDel, setModalDel] = useState(false);

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
          onClick={() => {
            dispatch(openModal());
          }}
        >
          Edit
        </button>
        <Modal
          isVisible={isVisible}
          onClose={() => {
            dispatch(closeModal());
          }}
          transaction={transaction}
        />
        <button
          className='btn btn-danger'
          onClick={() => setModalDel(!modalDel)}
        >
          Delete
        </button>
        <ModalDelete
          isVisible={modalDel}
          onClose={() => setModalDel(!modalDel)}
          transaction={transaction}
          refetchEarn={refetchEarn}
          refetchSpend={refetchSpend}
          deleteTransaction={deleteTransaction}
        />
      </td>
    </tr>
  );
};

export default ListHistory;
