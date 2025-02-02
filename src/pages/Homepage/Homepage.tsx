import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Homepage.css';

export default function AppleHomepage() {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-contents-wrapper">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
