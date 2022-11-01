import DashboardHistory from '../components/Dashboards/DashboardHistory';
import DashboardRecap from '../components/Dashboards/DashboardRecap';

const DashboardPage = () => {
  return (
    <section>
      <DashboardRecap />
      <DashboardHistory />
    </section>
  );
};

export default DashboardPage;
