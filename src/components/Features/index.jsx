import FeatureList from './FeatureList';
import FeatIcon1 from '../../assets/img/feat1.png';
import FeatIcon2 from '../../assets/img/feat2.png';
import FeatIcon3 from '../../assets/img/feat3.png';

const Index = () => {
  return (
    <>
      <section className='py-[40px]' id='features'>
        <div className='flex flex-col items-center bg-color-primary py-[40px] lg:pt-[40px] lg:pb-[220px]'>
          <h1 className='text-white text-[32px] leading-[42px] font-semibold lg:text-[42px] lg:leading-[52px]'>
            Duid<span className='text-color-dark'>Trackr.</span>
          </h1>
          <h1 className='text-white text-[32px] leading-[42px] font-semibold lg:text-[42px] lg:leading-[52px]'>
            Features
          </h1>
          <p className='text-white text-[16px] leading-[26px] mt-[12px] font-light lg:mt-[12px]'>
            We provide three main features to manage your finance.
          </p>
        </div>
      </section>
      <section className='lg:max-w-[1200px] mx-auto lg:relative'>
        <div className='lg:absolute lg:inset-x-0 lg:bottom-[-68px]'>
          <div className='flex gap-[40px] px-[24px] lg:justify-between lg:items-center overflow-auto no-scrollbar lg:overflow-hidden'>
            <FeatureList
              icon={FeatIcon1}
              title='Add Transaction'
              subtitle='Create your new transaction history with some categories real-time.'
            />
            <FeatureList
              icon={FeatIcon2}
              title='Edit/Delete Transaction'
              subtitle='You can simplify edit or delete transaction history real-time.'
            />
            <FeatureList
              icon={FeatIcon3}
              title='Recap All Transaction'
              subtitle='We provide all recap of Spendings, Earnings, and Balance real-time.'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
