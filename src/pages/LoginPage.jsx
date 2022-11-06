import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { getAccount } from '../configs/Queries';
import { loginAuth } from '../utils/authHelpers';

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
    <>
      <div className='w-full h-screen m-auto flex items-center justify-center'>
        <div className='bg-color-primary px-6 lg:px-16 py-[20px] lg:py-[30px] rounded-md shadow-md'>
          <form
            className='flex flex-col gap-[12px] text-left lg:w-[480px]'
            onSubmit={handleLoginAcc}
            onChange={handleChangeAcc}
          >
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-white py-1 text-[20px]'>
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
              <label htmlFor='password' className='text-white py-1 text-[20px]'>
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
        </div>
      </div>
    </>
  );
};

export default LoginPage;
