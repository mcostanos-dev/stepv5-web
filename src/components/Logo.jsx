import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/sal-tech-logo.png";

const Logo = () => {
  return (
    <div className="ml-4 flex lg:ml-0">
      <Link href="/">
        <Image
          src={LogoImg}
          alt="sal-tech logo"
          className=" h-10 lg:h-14 w-32 lg:w-48 "
        />
      </Link>
    </div>
  );
};

export default Logo;
