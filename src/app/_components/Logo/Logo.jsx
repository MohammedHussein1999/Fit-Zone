import logo from "../../../../public/images/PNGLOGO.png";
import Image from 'next/image';

function Logo() {
  return <Image src={logo} alt="fit-fettence" width={80} quality={1} height={80} />;
}

export default Logo