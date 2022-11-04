const RecapCard = ({ icon, type, amount }) => {
  return (
    <div className='flex w-[340px] px-4 h-[160px] bg-white rounded-md shadow-md justify-start items-center gap-4'>
      <div>
        <img src={icon} alt='' className='w-[100px]' />
      </div>
      <div
        className={
          type === 'Spendings' ? 'text-color-danger' : 'text-color-primary'
        }
      >
        <h1 className='text-[32px] font-light'>{type}</h1>
        <p className='text-[20px] font-semibold'>{amount}</p>
      </div>
    </div>
  );
};

export default RecapCard;
