const Modal = ({
  isVisible,
  onClose,
  handleChangeEdit,
  handleSubmitEdit,
  transactionData,
}) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'modal') onClose();
  };

  console.log(handleChangeEdit);
  console.log(handleSubmitEdit);

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
                  onClick={() => {
                    updateTransaction(
                      transactionData.transactionID,
                      transactionData.category.categoryID,
                      transactionData.earning.earningID,
                      transactionData.spending.spendingID
                    );
                  }}
                  className='btn border-white border-2 text-white w-[240px]'
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
