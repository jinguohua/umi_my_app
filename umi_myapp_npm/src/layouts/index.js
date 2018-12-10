import MainLayout from './mainLayout'
import {Layout, Menu, Breadcrumb, Icon,} from 'antd';
import styles from './index.css';
const {Header, Content, Footer, Sider,} = Layout;
const SubMenu = Menu.SubMenu;
function BasicLayout(props) {
  
    return (
      <MainLayout props> </MainLayout>
    );
    }

export default BasicLayout;
