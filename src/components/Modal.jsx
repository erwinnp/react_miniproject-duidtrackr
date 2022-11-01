import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { UpdateTheTransaction } from '../configs/Mutations';
import { GetAllTransaction } from '../configs/Queries';

const Modal = ({ isVisible, onClose, transactionData }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'modal') onClose();
  };

  const dataToEdit = transactionData.duidtrackr_transactions[0];

  console.log(dataToEdit);

  const [updateTransactionHistory] = useMutation(UpdateTheTransaction, {
    refetchQueries: [GetAllTransaction],
  });

  const [editTransaction, setEditTransaction] = useState({
    transactionName: '',
    categoryName: 'Entertainment',
    transactionType: 'Earning',
    amount: '',
    dateAdded: '',
  });

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditTransaction((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmitEdit = () => {
    const newTransaction = {
      transactionID: dataToEdit.transactionID,
      categoryID: dataToEdit.category.categoryID,
      earningID: dataToEdit.earning.earningID,
      spendingID: dataToEdit.spending.spendingID,
      transactionName: editTransaction.transactionName,
      categoryName: editTransaction.categoryName,
      transactionType: editTransaction.transactionType,
      ...(editTransaction.transactionType === 'Spending'
        ? { spendingAmount: editTransaction.amount }
        : { spendingAmount: 0 }),
      ...(editTransaction.transactionType === 'Earning'
        ? { earningAmount: editTransaction.amount }
        : { earningAmount: 0 }),
      dateAdded: editTransaction.dateAdded,
    };

    updateTransactionHistory({ variables: newTransaction });
  };

  return (
    <div
      id='modal'
      className='fixed inset-0 bg-color-light bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      onClick={handleClose}
    >
      <div className='w-[280px] lg:w-[600px] flex flex-col'>
        <button
          className='text-white text-xl place-self-end'
          onClick={() => onClose()}
        >
          X
        </button>
        <div className='w-full mx-auto flex items-center justify-center'>
          <div className='bg-color-primary px-6 lg:px-16 py-[20px] lg:py-[30px] rounded-md shadow-md border-2 border-white'>
            <form
              className='flex flex-col gap-[12px] text-left lg:w-[480px]'
              onChange={handleChangeEdit}
              onSubmit={handleSubmitEdit}
            >
              <div className='flex flex-col'>
                <label
                  htmlFor='transactionName'
                  className='text-white py-1 text-[20px]'
                >
                  Transaction Name
                </label>
                <input
                  type='text'
                  name='transactionName'
                  id='transactionName'
                  placeholder='Please type here...'
                  className='input-field'
                />
              </div>

              <div className='flex flex-col'>
                <label
                  htmlFor='category'
                  className='text-white py-1 text-[20px]'
                >
                  Category
                </label>
                <select
                  name='categoryName'
                  id='category'
                  className='select-field'
                >
                  <option value='Entertainment'>Entertainment</option>
                  <option value='Work'>Work</option>
                  <option value='Lifestyle'>Lifestyle</option>
                  <option value='Education'>Education</option>
                  <option value='Food'>Food</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label
                  htmlFor='transactionType'
                  className='text-white py-1 text-[20px]'
                >
                  Type
                </label>
                <select
                  name='transactionType'
                  id='transactionType'
                  className='select-field'
                >
                  <option value='Earning'>Earning</option>
                  <option value='Spending'>Spending</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label htmlFor='amount' className='text-white py-1 text-[20px]'>
                  Amount
                </label>
                <input
                  type='number'
                  name='amount'
                  id='amount'
                  placeholder='Please type here...'
                  className='input-field'
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='date' className='text-white py-1 text-[20px]'>
                  Date
                </label>
                <input
                  type='date'
                  name='dateAdded'
                  id='date'
                  className='input-field'
                />
              </div>

              <div className='flex justify-center lg:mt-[24px] items-center mt-[24px]'>
                <button
                  type='submit'
                  className='btn border-white border-2 text-white w-[240px]'
                  onClick={handleSubmitEdit}
                >
                  Edit Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
