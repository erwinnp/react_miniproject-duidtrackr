const ModalDelete = ({
  transaction,
  deleteTransaction,
  refetchEarn,
  refetchSpend,
  isVisible,
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    <div
      id='modal'
      className='fixed inset-0 bg-color-light bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
    >
      <div className='w-[280px] lg:w-[300px] lg:h-[200px] flex flex-col gap-8 justify-center items-center bg-white border-2 border-color-dark rounded-lg'>
        <h1 className='font-semibold text-[24px]'>Delete this transaction?</h1>
        <div className='flex gap-8'>
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
            Yes
          </button>
          <button
            className='btn border-2 border-color-dark text-color-dark'
            onClick={() => onClose()}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
