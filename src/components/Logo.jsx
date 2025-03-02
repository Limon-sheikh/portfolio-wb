import navLogo from '../assets/img/navlogo.png'

const Logo = () => {
    return (
        <div id="logo" className=" text-xl font-bold">
          <a href="#"><img src={navLogo} alt="this is logo" /></a>
        </div>
    );
};

export default Logo;