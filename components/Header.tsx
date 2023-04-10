import Image from "next/image";

const Header: React.FC = () => {
  return (
    <nav className="flex h-[48px] w-full items-center justify-between">
      <h1 className="font-Lora text-[36px] leading-[46px] text-fourthBlack">
        Beautiful Plants
      </h1>
      <div className="ml-28 flex gap-[78px]">
        <div className="relative">
          <h2 className="font-Livvic text-[20px] font-semibold leading-[25px] text-primaryGreen">
            Home
          </h2>
          <div className="absolute left-[24px] top-[32px] h-[2px] w-[12px] bg-primaryGreen" />
        </div>
        <h2 className="font-Livvic text-[20px] leading-[25px] text-fifthGray">
          Products
        </h2>
        <h2 className="font-Livvic text-[20px] leading-[25px] text-fifthGray">
          Contacts
        </h2>
      </div>
      <div className="flex gap-[40px]">
        <Image src="/icons/search.svg" alt="search" width={24} height={24} />
        <Image src="/icons/user.svg" alt="user" width={24} height={24} />
        <Image
          src="/icons/shopping-cart.svg"
          alt="cart"
          width={24}
          height={24}
        />
        <div className="h-[40px] w-[2px] bg-fifthGray" />
        <Image src="/icons/burger.svg" alt="burger" width={24} height={18} />
      </div>
    </nav>
  );
};

export default Header;
