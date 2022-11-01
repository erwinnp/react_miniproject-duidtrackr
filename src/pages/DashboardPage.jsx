import { useMutation, useQuery } from '@apollo/client';
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

const DashboardPage = () => {
  const { loading, data, error } = useQuery(GetAllTransaction);

  const [deleteTransactionHistory, { loading: loadDelete, error: errDelete }] =
    useMutation(DeleteTransaction, { refetchQueries: [GetAllTransaction] });

  const {
    loading: loadSpend,
    data: dataSpend,
    error: errSpend,
    refetch: refetchSpend,
  } = useQuery(sumSpendings);

  const {
    loading: loadEarn,
    data: dataEarn,
    error: errEarn,
    refetch: refetchEarn,
  } = useQuery(sumEarnings);

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
        totalBalance={balanceIDR}
        balance={balance}
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
