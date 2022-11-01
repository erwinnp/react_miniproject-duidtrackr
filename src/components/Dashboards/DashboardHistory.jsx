import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';

const DashboardHistory = ({
  transactionData,
  deleteTransaction,
  refetchEarn,
  refetchSpend,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='container mx-auto lg:max-w-[1200px]'>
      <div className='flex justify-between items-center pt-[32px] px-2'>
        <h1 className='text-color-primary text-[16px] font-light'>
          Transaction History
        </h1>
        <Link to='/add'>
          <button className='btn btn-primary'>Add Transaction</button>
        </Link>
      </div>
      <div className='overflow-x-auto rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:w-[1200px] mx-auto mt-[16px] shadow-md'>
          <thead className='text-[16px] text-white bg-color-primary uppercase'>
            <tr>
              <th scope='col' className='py-3 px-6'>
                Transaction
              </th>
              <th scope='col' className='py-3 px-6'>
                Type
              </th>
              <th scope='col' className='py-3 px-6'>
                Category
              </th>
              <th scope='col' className='py-3 px-6'>
                Amount
              </th>
              <th scope='col' className='py-3 px-6'>
                Date
              </th>
              <th scope='col' className='py-3 px-6'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionData?.duidtrackr_transactions.map((transaction) => (
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
                <td className='py-4 px-6'>
                  {transaction.category.categoryName}
                </td>
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
            ))}
          </tbody>
        </table>
        <Modal
          isVisible={showModal}
          onClose={() => setShowModal(!showModal)}
          transactionData={transactionData}
        />
      </div>
    </div>
  );
};

export default DashboardHistory;
