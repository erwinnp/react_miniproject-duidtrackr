import { Link } from 'react-router-dom';

const Form = ({ handleChange, handleSubmit }) => {
  return (
    <div className='w-full mx-auto flex items-center justify-center'>
      <div className='bg-color-primary px-6 lg:px-16 py-[20px] lg:py-[30px] rounded-md shadow-md'>
        <form
          className='flex flex-col gap-[12px] text-left lg:w-[480px]'
          onChange={handleChange}
          onSubmit={handleSubmit}
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
              required
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='category' className='text-white py-1 text-[20px]'>
              Category
            </label>
            <select
              name='categoryName'
              id='category'
              className='select-field'
              required
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
              required
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
              required
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
              required
            />
          </div>

          <div className='flex flex-col gap-4 justify-center lg:mt-[24px] items-center mt-[24px]'>
            <button
              type='submit'
              className='btn border-white border-2 text-white w-[240px]'
            >
              Add Transaction
            </button>
            <button className='btn btn-danger text-white w-[240px]'>
              <Link to='/dashboard'>Back To Dashboard</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
