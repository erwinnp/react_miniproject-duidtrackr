import IconSpending from '../../assets/img/spending.png';
import IconEarning from '../../assets/img/earning.png';
import IconWallet from '../../assets/img/wallet.png';
import RecapCard from './RecapCard';

const DashboardRecap = ({ totalBalance, totalEarn, totalSpend, balance }) => {
  return (
    <div className='pt-[100px] pb-[40px] text-white bg-color-primary'>
      <div className='flex flex-col justify-center items-center lg:w-[1200px] lg:items-start lg:mx-auto'>
        <h1 className='text-[32px] font-semibold'>Hello, username</h1>
        <p className='font-light'>Transaction Info</p>
      </div>
      <div className='flex flex-col items-center gap-4 mt-[32px] lg:flex-row justify-between lg:max-w-[1200px] mx-auto'>
        <div className='flex flex-col w-[340px] h-[160px] bg-white rounded-md shadow-md justify-center items-center gap-1'>
          <div className='flex items-center gap-5'>
            <img src={IconWallet} alt='' className='w-[56px]' />
            <h1 className='text-[24px] text-color-dark font-regular'>
              Balance
            </h1>
          </div>
          <div className='text-[32px] font-semibold'>
            {balance > 0 ? (
              <p className='text-color-dark'>{totalBalance}</p>
            ) : (
              <p className='text-color-danger'>{totalBalance}</p>
            )}
          </div>
        </div>
        <RecapCard icon={IconEarning} type='Earnings' amount={totalEarn} />
        <RecapCard icon={IconSpending} type='Spendings' amount={totalSpend} />
      </div>
    </div>
  );
};

export default DashboardRecap;
