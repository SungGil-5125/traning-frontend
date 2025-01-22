import '../layouts/Header.css';
import { ReactComponent as Hamberger } from '../assets/hamberger.svg';
import { ReactComponent as Display } from '../assets/display.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="hamberger">
        <Hamberger fill="white" />
      </div>
      <img
        className="logo style-scope ytmusic-logo"
        alt=""
        src="//music.youtube.com/img/ringo2/on_platform_logo_dark.svg"
        width={71}
        height={24}
        style={{
          marginLeft: '20px',
          marginTop: '20px',
        }}
      ></img>
      <form>
        <input
          type="text"
          className="input"
          placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
        ></input>
      </form>
      <div className="display">
        <Display fill="white" />
      </div>
    </div>
  );
};

export default Header;
