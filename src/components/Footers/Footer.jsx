const Footer = () => {
  return (
    <footer>
      <div className='border-t-2 border-color-primary'></div>
      <div className='text-center lg:text-left lg:max-w-[1200px] mx-auto lg:flex justify-between items-start'>
        <div className='mt-[8px] py-[24px]'>
          <a href='' className='text-color-primary text-[24px] font-bold'>
            Duid<span className='text-color-dark'>Trackr.</span>
          </a>
        </div>
        <div className='flex justify-between mx-[12px] items-start text-center lg:text-left lg:gap-[130px] lg:mt-[32px]'>
          <div className=''>
            <h1 className='text-[20px] font-medium text-color-dark'>
              Social Media
            </h1>
            <ul className='text-color-light text-[14px] lg:text-[16px] font-light mt-[8px]'>
              <li>Whatsapp</li>
              <li>Instagram</li>
              <li>Github</li>
            </ul>
          </div>
          <div>
            <h1 className='text-[20px] font-medium text-color-dark'>
              Connect Us
            </h1>
            <ul className='text-color-light text-[14px] lg:text-[16px] font-light mt-[8px]'>
              <li>erwinpurnama9988@gmail.com</li>
              <li>+6285-8653-58765</li>
              <li>Boyolali, Central Java, Indonesian</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-[40px] mb-[10px] text-[14px] lg:text-[16px] font-light text-color-light'>
        <p>Copyright 2022 • All rights reserved • DuidTrackr.</p>
        <p>Website create using ReactJS by Erwin Purnomo</p>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
