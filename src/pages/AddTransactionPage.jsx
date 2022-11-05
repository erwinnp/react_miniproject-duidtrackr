import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Form from '../components/Form';
import { AddTransaction } from '../configs/Mutations';
import { GetAllTransaction } from '../configs/Queries';

const AddTransactionPage = () => {
  const [addNewTransaction] = useMutation(AddTransaction, {
    refetchQueries: GetAllTransaction,
    onCompleted: () => toast.success('Successfully Add New Transaction'),
  });

  const [newHistory, setNewHistory] = useState({
    transactionName: '',
    categoryName: 'Entertainment',
    transactionType: 'Earning',
    amount: '',
    dateAdded: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHistory((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      transactionName: newHistory.transactionName,
      categoryName: newHistory.categoryName,
      transactionType: newHistory.transactionType,
      ...(newHistory.transactionType === 'Spending'
        ? { spendingAmount: newHistory.amount }
        : { spendingAmount: 0 }),
      ...(newHistory.transactionType === 'Earning'
        ? { earningAmount: newHistory.amount }
        : { earningAmount: 0 }),
      dateAdded: newHistory.dateAdded,
    };

    addNewTransaction({ variables: newTransaction });
  };

  return (
    <section className='pt-[100px] text-center mb-10'>
      <h1 className='text-color-dark text-[32px] font-semibold'>
        Add New Transaction
      </h1>
      <p className='mb-8 font-light text-color-light'>
        Please fill up the blank fields below
      </p>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </section>
  );
};

export default AddTransactionPage;
