import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';

const DashboardHistory = () => {
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
            <tr className='bg-white border-b border-color-dark text-color-dark text-[16px]'>
              <th scope='row' className='py-4 px-6 font-medium'>
                Name
              </th>
              <td className='py-4 px-6'>Spending/Earning</td>
              <td className='py-4 px-6'>Category</td>
              <td className='py-4 px-6'>$2999</td>
              <td className='py-4 px-6'>Date</td>
              <td className='py-4 px-6 flex'>
                <button
                  className='btn btn-secondary mr-3'
                  onClick={() => setShowModal(!showModal)}
                >
                  Edit
                </button>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Modal isVisible={showModal} onClose={() => setShowModal(!showModal)} />
      </div>
    </div>
  );
};

export default DashboardHistory;
