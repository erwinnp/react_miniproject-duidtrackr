import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { getAccount } from '../configs/Queries';
import { loginAuth } from '../utils/authHelpers';
import BannerHero from '../assets/img/banner-hero.png';

const LoginPage = () => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const [getUserAccount, { data, loading }] = useLazyQuery(getAccount);

  let navigate = useNavigate();

  const handleChangeAcc = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLoginAcc = (e) => {
    e.preventDefault();
    getUserAccount({
      variables: { email: account.email, password: account.password },
    });
  };

  useEffect(() => {
    if (data?.duidtrackr_users.length === 1) {
      loginAuth.setLogin(data?.duidtrackr_users[0].userEmail);
      return navigate('/dashboard');
    }
  }, [data]);

  if (loading) return <Loading />;

  console.log(data);

  return (
    <section className='h-screen w-screen flex justify-center items-center'>
      <div className='container min-h[700px] mx-auto flex justify-around items-center lg:w-[1200px]'>
        <div className='flex flex-col lg:flex-row items-center justify-center text-left lg:gap-[120px]'>
          <div className='flex-1'>
            <img
              src={BannerHero}
              alt='Banner'
              className='w-[220px] lg:w-screen'
            />
          </div>
          <div className='flex-1 bg-color-primary px-[42px] py-[32px] rounded-md'>
            <form
              className='flex flex-col gap-[12px] text- mx-auto lg:w-[480px]'
              onSubmit={handleLoginAcc}
              onChange={handleChangeAcc}
            >
              <h1 className='text-white text-center text-[24px] lg:text-[42px]'>
                Login Account
              </h1>
              <div className='flex flex-col'>
                <label
                  htmlFor='email'
                  className='text-white py-1 lg:text-[20px]'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Please type here...'
                  className='input-field'
                  required
                />
              </div>

              <div className='flex flex-col'>
                <label
                  htmlFor='password'
                  className='text-white py-1 lg:text-[20px]'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Please type here...'
                  className='input-field'
                  required
                />
              </div>
              <button
                type='submit'
                className='text-white border-2 btn w-[220px] mx-auto mt-2'
              >
                Login
              </button>
            </form>
            <p className='text-center mt-2 text-white'>
              Don't have an account?{' '}
              <Link to='/register' className='underline font-semibold'>
                Register Now.
              </Link>
              <br />
              <span className='font-semibold underline'>
                <Link to='/'>Back to home</Link>
              </span>
            </p>
            {data && (
              <h2 className='text-center text-color-danger font-bold'>
                Username or Password is Wrong!
              </h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
