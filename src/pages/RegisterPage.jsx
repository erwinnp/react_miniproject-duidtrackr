import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import { CreateAccount } from '../configs/Mutations';

const RegisterPage = () => {
  const [account, setAccount] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [createUserAccount, { data, loading }] = useMutation(CreateAccount, {
    onCompleted: () => toast.success('Successfully Add New Transaction'),
  });

  let navigate = useNavigate();

  const handleChangeAcc = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleCreateAcc = (e) => {
    e.preventDefault();
    createUserAccount({
      variables: {
        fullName: account.fullName,
        email: account.email,
        password: account.password,
      },
    });
    return navigate('/login');
  };

  if (loading) return <Loading />;

  console.log(data);

  return (
    <>
      <div className='w-full h-screen m-auto flex items-center justify-center'>
        <div className='bg-color-primary px-6 lg:px-16 py-[20px] lg:py-[30px] rounded-md shadow-md'>
          <form
            className='flex flex-col gap-[12px] text-left lg:w-[480px]'
            onSubmit={handleCreateAcc}
            onChange={handleChangeAcc}
          >
            <div className='flex flex-col'>
              <label htmlFor='fullName' className='text-white py-1 text-[20px]'>
                Full Name
              </label>
              <input
                type='fullName'
                name='fullName'
                id='fullName'
                placeholder='Please type here...'
                className='input-field'
                required
              />
            </div>

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
              Register
            </button>
          </form>
          <p className='text-center mt-2 text-white underline mt-3'>
            <Link to='/'>Back to home</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
