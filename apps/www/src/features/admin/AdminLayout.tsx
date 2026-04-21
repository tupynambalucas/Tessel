import { type FC, Suspense } from 'react';
import styles from './Admin.module.css';
import HomeView from '@/features/admin/views/home';
import UsersView from '@/features/admin/views/users';
import ConfigView from '@/features/admin/views/config';
import SideBar from '@/features/admin/components/SideBar';
import Loader from '@/components/loaders/ScreenLoader';
import { useAdminNavigation } from './admin.navigation';

const AdminLayout: FC = () => {
  const { currentView } = useAdminNavigation();

  const renderActivePanel = () => {
    switch (currentView) {
      case 'users':
        return <UsersView />;
      case 'home':
        return <HomeView />;
      case 'config':
        return <ConfigView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className={styles.container}>
      <SideBar />
      <main>
        <Suspense fallback={<Loader />}>{renderActivePanel()}</Suspense>
      </main>
    </div>
  );
};

export default AdminLayout;
