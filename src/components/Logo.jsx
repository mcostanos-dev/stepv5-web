import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="ml-4 flex lg:ml-0">
      <Link href="/">
        <Image
          src="/sal-tech-logo.png"
          width={200}
          height={200}
          alt="sal-tech logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
