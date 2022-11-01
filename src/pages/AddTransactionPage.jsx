import Form from '../components/Form';

const AddTransactionPage = () => {
  return (
    <section className='pt-[100px] text-center mb-10'>
      <h1 className='text-color-dark text-[32px] font-semibold'>
        Add New Transaction
      </h1>
      <p className='mb-8 font-light text-color-light'>
        Please fill up the blank fields below
      </p>
      <Form />
    </section>
  );
};

export default AddTransactionPage;
