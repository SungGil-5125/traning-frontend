import './Sidebar.css';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-top">
        {/* sidebar Icon component */}
        <div className="sidebar-item">
          <HomeIcon fill="white" width={24} height={24} />
          <span>홈</span>
        </div>
        <div className="sidebar-item">
          <HomeIcon fill="white" width={24} height={24} />
          <span>둘러보기</span>
        </div>
        <div className="sidebar-item">
          <HomeIcon fill="white" width={24} height={24} />
          <span>보관함</span>
        </div>
        <div className="sidebar-line" />
      </div>
      <div>+</div>
      <div>
        <div>좋아요</div>
        <div>사온드</div>
        <div>hip</div>
      </div>
    </div>
  );
};

export default Sidebar;
