import { useMutation, useQuery, useSubscription } from '@apollo/client';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import DashboardHistory from '../components/Dashboards/DashboardHistory';
import DashboardRecap from '../components/Dashboards/DashboardRecap';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { DeleteTransaction } from '../configs/Mutations';
import {
  GetAllTransaction,
  sumEarnings,
  sumSpendings,
} from '../configs/Queries';
import { GetUserTransaction } from '../configs/Subscriptions';

const DashboardPage = () => {
  const userEmail = Cookies.get('email');

  const { loading, data, error } = useSubscription(GetUserTransaction, {
    variables: { userEmail },
  });

  const [deleteTransactionHistory, { loading: loadDelete, error: errDelete }] =
    useMutation(DeleteTransaction, {
      refetchQueries: [GetAllTransaction],
      onCompleted: () => toast.success('Successfully Delete The Transaction'),
      onError: () => toast.error('Error Delete The Transaction'),
    });

  const {
    loading: loadSpend,
    data: dataSpend,
    error: errSpend,
    refetch: refetchSpend,
  } = useQuery(sumSpendings, { variables: { userEmail } });

  const {
    loading: loadEarn,
    data: dataEarn,
    error: errEarn,
    refetch: refetchEarn,
  } = useQuery(sumEarnings, { variables: { userEmail } });

  console.log(dataEarn);

  const deleteTransaction = (idTransaction, idCategory, idEarn, idSpend) => {
    deleteTransactionHistory({
      variables: {
        transactionID: idTransaction,
        categoryID: idCategory,
        earningID: idEarn,
        spendingID: idSpend,
      },
    });
  };

  if (loading || loadDelete || loadEarn || loadSpend) return <Loading />;
  if (error || errDelete || errEarn || errSpend) return <Error />;

  const sumOfSpendings =
    dataSpend.duidtrackr_spendings_aggregate.aggregate.sum.spendingAmount;
  const sumOfEarnings =
    dataEarn.duidtrackr_earnings_aggregate.aggregate.sum.earningAmount;

  const balance =
    dataEarn.duidtrackr_earnings_aggregate.aggregate.sum.earningAmount -
    dataSpend.duidtrackr_spendings_aggregate.aggregate.sum.spendingAmount;

  const spendingIDR = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(sumOfSpendings);

  const earningIDR = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(sumOfEarnings);

  const balanceIDR = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(balance);

  return (
    <section>
      <DashboardRecap
        totalSpend={spendingIDR}
        totalEarn={earningIDR}
        balance={balance}
        totalBalance={balanceIDR}
      />
      <DashboardHistory
        transactionData={data}
        deleteTransaction={deleteTransaction}
        refetchEarn={refetchEarn()}
        refetchSpend={refetchSpend()}
      />
    </section>
  );
};

export default DashboardPage;
