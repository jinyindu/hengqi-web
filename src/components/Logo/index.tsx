import logo from '@/assets/images/logo.png'
import Background from '../Background';

const Logo = () => {
  return (
    <div className='relative w-[178px] h-[33px]'>
      <Background src={logo} alt=''/>
    </div>
  );
};

export default Logo;
