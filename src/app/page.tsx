import { ThemeImage, Button, Slider, Heading, FAQ, Benefits } from '@/components';

const Logos = [
  { srcLight: '/icons/Logo.svg', srcDark: '/icons/Logodark.svg' },
  { srcLight: '/icons/Logo-1.svg', srcDark: '/icons/Logo-1dark.svg' },
  { srcLight: '/icons/Logo-2.svg', srcDark: '/icons/Logo-2dark.svg' },
  { srcLight: '/icons/Logo-3.svg', srcDark: '/icons/Logo-3dark.svg' },
  { srcLight: '/icons/Logo-4.svg', srcDark: '/icons/Logo-4dark.svg' },
  { srcLight: '/icons/Logo-5.svg', srcDark: '/icons/Logo-5dark.svg' },
  { srcLight: '/icons/Logo-6.svg', srcDark: '/icons/Logo-6dark.svg' },
  { srcLight: '/icons/Logo-7.svg', srcDark: '/icons/Logo-7dark.svg' },
  { srcLight: '/icons/Logo-8.svg', srcDark: '/icons/Logo-8dark.svg' },
  { srcLight: '/icons/Logo-9.svg', srcDark: '/icons/Logo-9dark.svg' },
];

const Applications = [
  {
    srcLight: '/icons/server_databases_network.svg',
    srcDark: '/icons/server_databases_networkdark.svg',
    title: 'Predictive Power',
    description:
      "Harness Neuros's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions that propel your business forward.",
    industries: ['Finance', 'Retail', 'E-commerce'],
  },
  {
    srcLight: '/icons/Ticket,_Group,_Circle.svg',
    srcDark: '/icons/Ticket,_Group,_Circledark.svg',
    title: 'Connect with Ease',
    description:
      "Integrate Neuros with your existing tools and platforms for a unified analytics experience. From CRMs to ERPs, we've got you covered.",
    industries: ['Tech', 'Healthcare', 'Manufacturing'],
  },
  {
    srcLight: '/icons/Target,_Space,_Object,_Select.svg',
    srcDark: '/icons/Target,_Space,_Object,_Selectkdark.svg',
    title: 'Visualize Your Success',
    description:
      "Craft bespoke dashboards that resonate with your brand's goals. With drag-and-drop functionalities, visualizing your data has never been this easy.",
    industries: ['Marketing', 'Sales', 'Operations'],
  },
  {
    srcLight: '/icons/chart_rates_checkmark.svg',
    srcDark: '/icons/chart_rates_checkmarkdark.svg',
    title: 'Stay Updated, Always',
    description:
      "With Neuros's real-time data processing, you're always in the know. Make decisions based on the latest data and stay ahead of the curve.",
    industries: ['E-commerce', 'Logistics', 'Supply Chain'],
  },
  {
    srcLight: '/icons/server_databases_synchronize.svg',
    srcDark: '/icons/server_databases_synchronizedark.svg',
    title: "Your Data's Safe Haven",
    description:
      "Rest easy knowing your data is protected with Neuros's top-tier security protocols. From encryption to access controls, we prioritize your data's safety.",
    industries: ['Finance', 'Healthcare', 'Legal'],
  },
  {
    srcLight: '/icons/credit_card_documet_sync.svg',
    srcDark: '/icons/credit_card_documet_syncdark.svg',
    title: 'Collaborate and Conquer',
    description:
      "Work together seamlessly with Neuros's collaborative features. Share insights, annotate charts, and drive collective growth.",
    industries: ['Design', 'Development', 'Project Management'],
  },
  {
    srcLight: '/icons/credit_card_cursor_click1.svg',
    srcDark: '/icons/credit_card_cursor_click1dark.svg',
    title: 'Simplicity Meets Power',
    description:
      "Neuros offers an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more time analyzing.",
    industries: ['All Industries'],
  },
  {
    srcLight: '/icons/hand_credit_card_movement_left.svg',
    srcDark: '/icons/hand_credit_card_movement_leftdark.svg',
    title: 'Let AI Do the Heavy Lifting',
    description:
      "Receive automated insights and recommendations tailored to your business needs. Let Neuros's AI guide your strategies.",
    industries: ['Retail', 'Marketing', 'Sales'],
  },
  {
    srcLight: '/icons/server_databases-sync.svg',
    srcDark: '/icons/server_databases-syncdark.svg',
    title: 'Collaborate and Conquer',
    description:
      "Whether you're a startup or an enterprise, Neuros scales with you. Experience robust analytics solutions that adapt to your growth.",
    industries: ['Startups', 'SMEs', 'Enterprises'],
  },
];

interface ApplicationCardProps {
  title: string;
  description: string;
  srcLight: string;
  srcDark: string;
  industries: string[];
  index: number;
  applicationsLength: number;
}

function ApplicationCard({
  title,
  description,
  srcLight,
  srcDark,
  industries,
  index,
  applicationsLength,
}: ApplicationCardProps) {
  return (
    <div
      className={`border border-primary-400 rounded-xl p-8 hover:border-accent-600 hover:shadow-blue transition ${index === applicationsLength - 1 && 'md:col-span-2 lg:col-span-1'}`}>
      <ThemeImage srcLight={srcLight} srcDark={srcDark} alt="illustration" className="mb-4 w-8 h-8" />
      <h3 className="font-DM font-bold text-xl mb-1">{title}</h3>
      <p className="text-base text-primary-800 h-[78px] overflow-clip mb-4">{description}</p>
      <p className="text-sm text-accent-600">{industries.join(', ')}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="max-w-360 m-auto text-center px-5 md:px-8 py-14 md:py-8 md:pt-28 md:pb-20 lg:px-29.5">
        <Heading>
          Generative <span className="hidden md:block">Business</span> Intelligence for Analysts
        </Heading>
        <h1 className="font-DM font-bold text-4xl mb-5 md:text-5xl lg:px-44">
          Revolutionizing Business Decisions with AI-Powered Analytics
        </h1>
        <p className="text-primary-800 text-base mb-10 md:px-20 lg:px-60">
          Harnesses the power of artificial intelligence to transform your business data into actionable insights,
          propelling you to new heights of success
        </p>
        <div className="flex flex-col justify-center gap-3 md:flex-row mb-8 md:mb-16">
          <Button text="Start your free trial" />
          <Button text="Watch video" light srcDark="/icons/Licondark.svg" srcLight="/icons/Licon.svg" />
        </div>
        <div className="h-64 rounded-3xl md:h-120 flex items-center justify-center relative overflow-clip">
          <ThemeImage
            srcDark="/images/Ilustration3dark.png"
            srcLight="/images/Ilustration3.png"
            alt="play"
            className="w-full h-full object-cover absolute"
          />
          <div className="bg-primary-0 w-24 h-24 rounded-full flex items-center justify-center border-[0.75rem] border-accent-600/50 md:max-w-max md:w-max md:flex md:gap-3 relative z-10">
            <button aria-label="play video" className="md:ml-3 w-14 h-14 ">
              <ThemeImage srcDark="/icons/Playdark.svg" srcLight="/icons/Play.svg" alt="play" className="w-14 h-14" />
            </button>
            <div className="hidden md:block">
              <p className="font-semibold text-xl block max-w-max pr-6">Watch introduce video</p>
              <div className="flex items-center gap-2">
                <p className="text-base text-primary-800">5 mins</p>
                <p className="w-1 h-1 bg-gray-400 rounded-full block"></p>
                <button className="font-medium text-accent-600">Play video</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="px-5 pt-5 pb-14 md:px-8 md:pt-10 overflow-hidden items-center justify-center flex flex-col">
        <p className="text-primary-800 text-base text-center mb-5">
          160,000+ customers in over 120 countries grow their businesses with Neuros
        </p>
        <div className="grid grid-cols-5 gap-10 w-280">
          {Logos.map((logo, index) => (
            <ThemeImage key={index} srcDark={logo.srcDark} srcLight={logo.srcLight} alt="logo" className="h-12 w-48" />
          ))}
        </div>
      </div>
      <section className="py-14 px-5 max-w-360 m-auto md:pt-32 md:pb-28 md:px-14 lg:px-28 h-dvh md:h-187.5 lg:h-177.5 flex flex-col justify-between">
        <div>
          <h2 className="font-DM font-bold text-[2.4rem] text-center mb-4">The Neuros Experience</h2>
          <p className="text-base text-primary-800 text-center mb-12 md:mb-20 max-w-200 m-auto">
            At Neuros, we pride ourselves on delivering top-notch AI-driven business analytics. But don&apos;t just take
            our word for it. Hear what our satisfied users have to say.
          </p>
        </div>
        <Slider />
      </section>
      <Benefits />
      <section className="px-5 max-w-360 m-auto pt-32 pb-28 md:px-8 lg:px-28">
        <Heading text="Applications" />
        <h2 className="font-DM font-bold text-[2.4rem] text-center mb-4">Insights and predictions made easy</h2>
        <p className="text-base text-primary-800 mb-14 text-center max-w-190 mx-auto">
          Advanced business intelligence tools enhance efficiency across your entire operation. By predicting future
          revenue and dissecting marketing effectiveness, these tools provide you with the critical insights needed for
          informed decision-making.
        </p>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 mb-9 relative">
          {Applications.map((application, index) => (
            <ApplicationCard key={index} {...application} index={index} applicationsLength={Applications.length} />
          ))}
          <div className=" w-full bg-gradient-to-t from-primary-0 from-0% via-35% via-primary-0 to-transparent to-100% h-[263px] absolute -bottom-[86px] z-0"></div>
        </div>
        <Button text="Explore more applications" light style="mx-auto z-10 relative" />
      </section>
      <FAQ />
    </>
  );
}
