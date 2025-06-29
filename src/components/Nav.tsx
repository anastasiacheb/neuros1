import { ThemeImage } from '@/components';

export default function Nav() {
  return (
    <nav className="max-w-[1440px] m-auto px-5 md:px-8 lg:px-[7.375rem]">
      <div className="2 relative flex justify-between py-1.5 md:py-2.5 lg:py-5 border-b border-primary-300 bg-primary-0 z-50">
        <div className="flex gap-10 items-center lg:py-1.5">
          <ThemeImage
            srcDark="/icons/Nimbus_logodark.svg"
            srcLight="/icons/Nimbus_logo.svg"
            alt="logo"
            className="w-28.5 h-8"
          />
          <div className="flex-col lg:flex-row lg:gap-8 absolute bg-primary-0 w-full top-[67px] md:top-19.25 lg:static transition-all ease-linear duration-300 z-40 hidden lg:flex">
            <a
              href="#"
              className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300">
              Features
            </a>

            <a
              href="#"
              className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300">
              Case Studies
            </a>

            <a
              href="#"
              className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300">
              Pricing
            </a>

            <a
              href="#"
              className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300 lg:hidden">
              Applications
            </a>

            <a
              href="#"
              className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300 lg:hidden">
              Blog
            </a>
          </div>
        </div>

        <div className="flex gap-2 flex-none items-center">
          <button className="font-DM font-bold border border-accent-300 text-accent-600 text-sm hover:border-accent-700 active:border-accent-900 py-3 px-5 rounded-xl items-center justify-center gap-2 max-w-max transition hidden md:flex flex-initial">
            Get a demo
          </button>
          <button className="font-DM font-bold text-primary-0 bg-accent-600 hover:bg-accent-700 text-sm active:bg-accent-800 py-3 px-5 rounded-xl max-w-max transition hidden md:flex flex-initial items-center">
            Start your free trial
          </button>
          <button aria-label="open or close mobile menu" className="m-3 lg:hidden relative js-nav__burger">
            <span className="block bg-[url('/icons/close.svg')] bg-no-repeat bg-center absolute top-0 w-8 h-8 bg-primary-0 opacity-0 transition-all js-nav__close"></span>
            <span className="block bg-[url('/icons/burger.svg')] bg-no-repeat bg-center w-8 h-8"></span>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-8 absolute bg-primary-0 w-full -top-[414px] lg:static js-nav__menu transition-all ease-linear duration-300 z-40 lg:hidden">
        <a
          href="#"
          className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300">
          Features
        </a>

        <a
          href="#"
          className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300">
          Case Studies
        </a>

        <a
          href="#"
          className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300">
          Pricing
        </a>

        <a
          href="#"
          className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300 lg:hidden">
          Applications
        </a>

        <a
          href="#"
          className="font-medium text-xl text-primary-900 border-b border-primary-200 py-5 w-full lg:text-base lg:text-primary-800 lg:border-primary-0 lg:py-0 lg:hover:text-accent-600 lg:hover:border-accent-600 lg:w-auto transition-all ease-linear duration-300 lg:hidden">
          Blog
        </a>
      </div>
    </nav>
  );
}
