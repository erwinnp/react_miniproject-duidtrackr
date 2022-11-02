import { Link } from 'react-router-dom';
import ListHistory from './ListHistory';

const DashboardHistory = ({
  transactionData,
  deleteTransaction,
  refetchEarn,
  refetchSpend,
}) => {
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
              <ListHistory
                deleteTransaction={deleteTransaction}
                refetchEarn={refetchEarn}
                refetchSpend={refetchSpend}
                transaction={transaction}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHistory;
