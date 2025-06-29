export default function Footer() {
  return (
    <footer className="px-5 max-w-360 m-auto pt-14 pb-10 md:pt-20 md:px-8 lg:px-28">
      <div className="bg-[url('/icons/Nimbus_logo.svg')] bg-center bg-no-repeat w-28.5 h-8 mb-14"></div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-14 md:mb-28">
        <div>
          <h2 className="font-DM font-bold text-base text-primary-900 mb-4">About Neuros</h2>
          <div className="flex flex-col gap-2">
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Company Overview
            </a>
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Careers
            </a>
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Press & Media
            </a>
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Testimonials
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-DM font-bold text-base text-primary-900 mb-4">Resources</h2>
          <div className="flex flex-col gap-2">
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Blog
            </a>
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Help Center
            </a>
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Webinars & Events
            </a>
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Case Studies
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-DM font-bold text-base text-primary-900 mb-4">Support & Contact</h2>
          <div className="flex flex-col gap-2">
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Contact Us
            </a>
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Technical Support
            </a>
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Feedback
            </a>
            <a href="#" className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all">
              Community Forum
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-DM font-bold text-base text-primary-900 mb-4">Connect</h2>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all flex gap-1 items-center group">
              <span className="block bg-[url('/icons/inst.svg')] bg-no-repeat bg-center w-4.5 h-4.5 group-hover:bg-[url('/icons/insthover.svg')] transition-all"></span>
              Instagram
            </a>

            <a
              href="#"
              className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all flex gap-1 items-center group">
              <span className="block bg-[url('/icons/face.svg')] bg-no-repeat bg-center w-4.5 h-4.5 group-hover:bg-[url('/icons/facehover.svg')] transition-all"></span>
              Facebook
            </a>

            <a
              href="#"
              className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all flex gap-1 items-center group">
              <span className="block bg-[url('/icons/twit.svg')] bg-no-repeat bg-center w-4.5 h-4.5 group-hover:bg-[url('/icons/twithover.svg')] transition-all"></span>
              Twitter / X
            </a>

            <a
              href="#"
              className="font-medium text-base text-primary-800 hover:text-accent-600 transition-all flex gap-1 items-center group">
              <span className="block bg-[url('/icons/link.svg')] bg-no-repeat bg-center w-4.5 h-4.5 group-hover:bg-[url('/icons/linkhover.svg')] transition-all"></span>
              Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-300 py-5 flex justify-between gap-6">
        <p className="text-sm text-primary-700 flex-initial">©2025 NIMBUS · All rights reserved.</p>
        <div className="flex gap-6 flex-none">
          <button className="font-medium text-sm text-primary-800">Term of use</button>
          <button className="font-medium text-sm text-primary-800">Privacy policy</button>
          <button className="font-medium text-sm text-primary-800">Security</button>
        </div>
      </div>
    </footer>
  );
}
