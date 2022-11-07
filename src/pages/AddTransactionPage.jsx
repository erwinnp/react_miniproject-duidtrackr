import { useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Form from '../components/Form';
import { AddUserTransaction } from '../configs/Mutations';
import { GetAllTransaction } from '../configs/Queries';

const AddTransactionPage = () => {
  const [addNewTransaction] = useMutation(AddUserTransaction, {
    refetchQueries: GetAllTransaction,
    onCompleted: () => toast.success('Successfully Add New Transaction'),
  });

  const [newHistory, setNewHistory] = useState({
    transactionName: '',
    categoryName: 'Entertainment',
    transactionType: 'Earning',
    amount: '',
    dateAdded: '',
    userEmail: '',
    spendEmail: '',
    earnEmail: '',
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
      ...(newHistory.transactionType === 'Spending' && {
        spendEmail: Cookies.get('email'),
      }),
      ...(newHistory.transactionType === 'Earning' && {
        earnEmail: Cookies.get('email'),
      }),
      dateAdded: newHistory.dateAdded,
      userEmail: Cookies.get('email'),
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
