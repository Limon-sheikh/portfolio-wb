import navLogo from '../assets/img/navlogo.png'

const Logo = () => {
    return (
        <div className=" text-xl font-bold">
          <a href="#"><img src={navLogo} alt="this is logo" /></a>
        </div>
    );
};

export default Logo;