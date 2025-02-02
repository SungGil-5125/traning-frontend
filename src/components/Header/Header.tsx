import './Header.css';
import { ReactComponent as Hamberger } from '../../assets/hamberger.svg';
import { ReactComponent as Display } from '../../assets/display.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="hamberger">
          <Hamberger />
        </div>
        <img
          alt=" "
          src="https://music.youtube.com/img/ringo2/on_platform_logo_dark.svg"
          width={71}
          height={24}
        />
      </div>
      <form>
        <input
          type="text"
          className="input"
          placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
        />
      </form>
      <div className="display-profile">
        <div className="display">
          <Display fill="white" />
        </div>
        <div>
          <img
            className="profile"
            alt="m"
            src="https://yt3.ggpht.com/ytc/AIdro_lqZZRWVeH6XqGcG2ZzeqBwu4JEmbDI7YNnRMhtqBHk1FvxA0I=s108-c-k-c0x00ffffff-no-rj"
            width={26}
            height={26}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
