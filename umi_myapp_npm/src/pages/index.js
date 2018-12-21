import styles from './index.css';
import UserManage from'./userManage/index';
function Index () {
  return (
    <div className={styles.normal}>
     
       <UserManage></UserManage>
    </div>
  );
}
export default Index