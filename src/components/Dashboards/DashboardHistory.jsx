const DashboardHistory = () => {
  return (
    <div class='overflow-x-auto relative rounded-lg'>
      <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:w-[1200px] mx-auto mt-[32px] shadow-md'>
        <thead class='text-[16px] text-white bg-color-primary uppercase'>
          <tr>
            <th scope='col' class='py-3 px-6'>
              Transaction
            </th>
            <th scope='col' class='py-3 px-6'>
              Type
            </th>
            <th scope='col' class='py-3 px-6'>
              Category
            </th>
            <th scope='col' class='py-3 px-6'>
              Amount
            </th>
            <th scope='col' class='py-3 px-6'>
              Date
            </th>
            <th scope='col' class='py-3 px-6'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class='bg-white border-b border-color-dark text-color-dark text-[16px]'>
            <th scope='row' class='py-4 px-6 font-medium'>
              Name
            </th>
            <td class='py-4 px-6'>Spending/Earning</td>
            <td class='py-4 px-6'>Category</td>
            <td class='py-4 px-6'>$2999</td>
            <td class='py-4 px-6'>Date</td>
            <td class='py-4 px-6'>Action</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardHistory;
