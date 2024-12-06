import Link from "next/link";

export default function Header() {
  const links = [
    <Link key="clicker" href="/clicker">
      Clicker
    </Link>,
    <Link key="ocean" href="/ocean">
      L&apos;Océan
    </Link>,
    <Link key="human" href="/human">
      L&apos;Humain
    </Link>,
    <Link key="about" href="/about">
      À propos
    </Link>,
  ];

  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          🪸 Race for Water: Avenir Ocean
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
