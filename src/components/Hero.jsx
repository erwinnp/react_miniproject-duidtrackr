import BannerHero from '../assets/img/banner-hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='min-h-[700px] pt-[100px]'>
      <div className='container min-h[700px] mx-auto flex justify-center items-center lg:w-[1200px]'>
        <div className='flex flex-col lg:flex-row items-center justify-center text-center lg:text-left'>
          <div className='flex-1'>
            <h1 className='font-primary font-semibold text-[56px] lg:text-[70px] text-color-dark leading-[66px] lg:leading-[80px] mb-[12px]'>
              Simplify Your Expense, With
              <span className='text-color-primary'> DuidTrackr.</span>
            </h1>
            <p className='font-primary font-light text-color-light px-12 mb-[24px] lg:px-0 lg:w-[560px]'>
              We provide what you need to manage your finance. Time to make
              complete and simple expense in your life.
            </p>
            <Link to='/login'>
              <button className='btn btn-primary mb-[32px]'>Get Started</button>
            </Link>
          </div>
          <div className='flex-1'>
            <img
              src={BannerHero}
              alt='Banner'
              className='w-[320px] lg:w-screen'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
