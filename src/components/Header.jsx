import * as React from "react";

const Logo = () => (
  <a href="/">
    <img 
      src="./img/logo.svg" 
      className="aspect-[3.33] fill-zinc-800 w-[220px]" 
      alt=""
    />
  </a>
);

const Search = () => (
  <input 
    type="search" 
    className="shrink-0 self-stretch my-auto rounded-xl border border-solid border-slate-300 h-[25px] w-[209px]" 
  />
);

const NavItem = ({ item }) => (
  <a href={item.link} className={`self-stretch my-auto ${item.className} hover:text-fuchsia-500`}>
    {item.text}
  </a>
);

const NavMenu = ({ navItems }) => (
  <nav className="flex gap-5 items-center my-auto max-md:flex-wrap">
    {navItems.map((item, index) => (
      <NavItem 
        key={index} 
        item={item}
      />
    ))}
  </nav>
);

const ActionButton = ({ children, className }) => (
  <button className={`flex flex-row justify-center px-5 py-2.5 rounded-md shrink-0 self-center ${className}`}>
    {children}
  </button>
);

function Header() {
  const navItems = [
    { 
      text: "HOME", 
      link: "#", 
      className: "text-fuchsia-500" 
    },
    { 
      text: "SERVICES & PRICES", 
      link: "#", 
      className: "" 
    },
    { 
      text: "GALLERY", 
      link: "#", 
      className: "" 
    },
    { 
      text: "MASTERS", 
      link: "#", 
      className: "" 
    },
    { 
      text: "CONTACTS", 
      link: "#", 
      className: "text-black" 
    },
  ];

  return (
    <header className="flex flex-col items-center px-16 pt-6 pb-6 text-base font-medium text-center bg-white shadow-sm text-neutral-600 max-md:px-5">
      <div className="flex flex-row gap-5 justify-between w-full max-w-[1400px] max-md:max-w-full">
        
        <Logo />

        <Search />

        <NavMenu navItems={navItems} />

        <ActionButton 
          className="bg-fuchsia-500 text-white"
        >
          BOOK ONLINE
        </ActionButton>
      </div>
    </header>
  );
}

export default Header;