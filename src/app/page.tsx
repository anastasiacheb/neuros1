import { ThemeImage, Button, Slider } from '@/components';
import React, { ReactNode } from 'react';

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

const Features = [
  {
    title: 'Navigate with Confidence through Precise Predictions',
    text: 'Embark on a journey of data-driven decision-making with Neuros, where our advanced AI algorithms meticulously analyze historical data and identify emerging patterns, ensuring each forecast is not only accurate but also reliable. Our predictive accuracy empowers your business to anticipate market trends, mitigate risks, and seize opportunities with utmost confidence.',
    // conten: [
    //   {
    //     srcDark: '/images/Ilustrationdark.png',
    //     srcLight: '/images/Ilustration.png',
    //     className:
    //       'absolute top-0 right-0  w-[75vw] h-[53vw] rounded-2xl md:w-[71vw] md:h-[50vw] lg:w-[30vw] lg:h-[21vw] lg:max-w-108 lg:max-h-76',
    //   },
    // ],
    content: (
      <>
        <ThemeImage
          srcDark="/images/Ilustrationdark.png"
          srcLight="/images/Ilustration.png"
          alt="illustration"
          className="absolute top-0 right-0  w-[75vw] h-[53vw] rounded-2xl md:w-[71vw] md:h-[50vw] lg:w-[30vw] lg:h-[21vw] lg:max-w-108 lg:max-h-76"
        />
        <ThemeImage
          srcDark="/images/Statistic_2dark.png"
          srcLight="/images/Statistic_2.png"
          alt="illustration"
          className="absolute bottom-0 left-0 bg-primary-0 w-[39vw] h-[36vw] shadow rounded-xl border border-primary-200 
          lg:w-[15.5vw] lg:h-[14.4vw] md:w-[36.5vw] md:h-[34vw] lg:max-w-56 lg:max-h-52"
        />
      </>
    ),
  },
  {
    title: 'Empower Your Forecasts with the Pulse of Real-Time Data',
    text: 'Neuros’s AI-Driven Forecasts harness the power of advanced machine learning algorithms, ensuring each prediction is not only accurate but also reliable. Navigate through your business journey with confidence, backed by forecasts that meticulously analyze historical data and identify emerging patterns, providing you with precise and trustworthy future insights.',
    content: (
      <>
        <ThemeImage
          srcLight="/images/Ilustration-1.png"
          srcDark="/images/Ilustration-1dark.png"
          alt="illustration"
          className="absolute top-5 md:top-9 right-9 md:right-16 w-[74vw] h-[52vw] rounded-2xl md:w-[70vw] md:h-[49vw] lg:w-[29vw] lg:h-[20vw] lg:max-w-106 lg:max-h-74"
        />
        <ThemeImage
          srcLight="/images/Line_Styling.png"
          srcDark="/images/Line_Stylingdark.png"
          alt="illustration"
          className="absolute top-0 left-0 bg-primary-0 w-[37.6vw] h-[37.6vw] shadow rounded-xl border border-primary-200 lg:w-[15vw] lg:h-[15vw] md:w-[36vw] md:h-[36vw] lg:max-w-54 lg:max-h-54"
        />
        <ThemeImage
          srcLight="/images/Pie_chart_2.png"
          srcDark="/images/Pie_chart_2dark.png"
          alt="illustration"
          className="absolute top-[20vw] lg:top-[8vw] right-0 bg-primary-0 w-[35vw] h-[23.8vw] shadow rounded-xl border border-primary-200 lg:w-[14vw] lg:h-[9vw] md:w-[33vw] md:h-[23vw] lg:max-w-50 lg:max-h-34"
        />
      </>
    ),
  },
  {
    title: 'Visualize Your Future through Intuitive Dashboards',
    text: 'Experience a seamless interaction with your predictive data through Neuros’s user-friendly dashboards. Tailor your visualizations to meet your unique analytical needs, ensuring critical insights are always accessible and actionable. With our customizable dashboards, transform complex data into clear, comprehensible visuals, enabling swift and informed decision-making at every business juncture.',
    content: (
      <>
        <ThemeImage
          srcLight="/images/Ilustration-2.png"
          srcDark="/images/Ilustration-2dark.png"
          alt="illustration"
          className="absolute top-0 right-0 w-[75vw] h-[53vw] rounded-2xl md:w-[71vw] md:h-[50vw] lg:w-[30vw] lg:h-[21vw] lg:max-w-108 lg:max-h-76"
        />
        <ThemeImage
          srcLight="/images/Stacked_Bar_Chart_1_(Medium).png"
          srcDark="/images/Stacked_Bar_Chart_1_(Medium)dark.png"
          alt="illustration"
          className="absolute bottom-0 left-0 bg-primary-0 w-[56vw] h-[38vw] shadow rounded-xl border border-primary-200 lg:w-[22vw] lg:h-[15vw] md:w-[54vw] md:h-[36vw] lg:max-w-82 lg:max-h-55"
        />
      </>
    ),
  },
  {
    title: 'Seamlessly Integrate and Synchronize Your Analytical Ecosystem',
    text: 'Neuros is not just a standalone platform but a synergistic solution designed to seamlessly integrate with your existing business tools and platforms. From CRMs to ERPs, Neuros ensures your predictive analytics are always in harmony with your operational data, providing a holistic and unified view of your business trajectory. Experience a platform that not only provides insights but also aligns with your existing technological ecosystem, ensuring consistency and reliability in your forecasting endeavors.',
    content: (
      <>
        <ThemeImage
          srcLight="/images/Ilustration-3.png"
          srcDark="/images/Ilustration-3dark.png"
          alt="illustration"
          className="absolute top-5 md:top-9 right-9 md:right-16 w-[74vw] h-[52vw] rounded-2xl md:w-[70vw] md:h-[49vw] lg:w-[29vw] lg:h-[20vw] lg:max-w-106 lg:max-h-74"
        />
        <ThemeImage
          srcLight="/images/Chart_3_(Small).png"
          srcDark="/images/Chart_3_(Small)dark.png"
          alt="illustration"
          className="absolute top-0 left-0 bg-primary-0 w-[37.6vw] h-[37.6vw] shadow rounded-xl border border-primary-200 lg:w-[15vw] lg:h-[15vw] md:w-[36vw] md:h-[36vw] lg:max-w-54 lg:max-h-54"
        />
        <ThemeImage
          srcLight="/images/Radar.png"
          srcDark="/images/Radardark.png"
          alt="illustration"
          className="absolute top-[26vw] lg:top-[8vw] right-0 bg-primary-0 w-[32vw] h-[33vw] shadow rounded-xl border border-primary-200 lg:w-[13vw] lg:h-[13vw] md:w-[30vw] md:h-[32vw] lg:max-w-46 lg:max-h-47"
        />
      </>
    ),
  },
];

interface featureItemProps {
  title: string;
  text: string;
  content: ReactNode;
  index: number;
}

function FeatureItem({ title, text, content, index }: featureItemProps) {
  let style;
  if (index % 2 === 0) {
    style = 'lg:flex-row-reverse';
  } else {
    style = 'lg:flex-row';
  }

  return (
    <div className={`flex flex-col gap-8 md:gap-12 lg:gap-20 lg:items-center ${style}`}>
      <div className="w-full lg:mx-auto lg:w-[44vw]">
        <div className="relative w-full h-[59vw] lg:mx-auto lg:w-[36vw] lg:h-[24vw] lg:max-h-85 lg:max-w-131">
          {content}
        </div>
      </div>
      <div className="lg:w-[33vw]">
        <h3 className="font-DM font-bold text-[1.9rem] mb-3">{title}</h3>
        <p className="text-base text-primary-800 h-[6.3rem] text-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}

const Benefits = [
  {
    srcLight: '/icons/credit_card_cursor_click.svg',
    srcDark: '/icons/credit_card_cursor_clickdark.svg',
    title: 'Instant Access',
    text: "Begin exploring Neuros's full suite of features immediately",
  },
  {
    srcLight: '/icons/chart_rates_checkmark1.svg',
    srcDark: '/icons/chart_rates_checkmark1dark.svg',
    title: 'No Commitments',
    text: 'No credit card required, and you can cancel anytime',
  },
  {
    srcLight: '/icons/World,_Transaction,_Transfer.svg',
    srcDark: '/icons/World,_Transaction,_Transferdark.svg',
    title: 'Dedicated Support',
    text: 'Our team is here to assist you every step of the way during your trial.',
  },
];

interface BenefitItemProps {
  srcLight: string;
  srcDark: string;
  title: string;
  text: string;
}

function BenefitItem({ srcLight, srcDark, title, text }: BenefitItemProps) {
  return (
    <div className="bg-gradient-to-br from-primary-0/10 to-primary-0/15 backdrop-blur-2 rounded-2xl border border-primary-0/20 p-2 flex gap-3">
      <ThemeImage
        srcLight={srcLight}
        srcDark={srcDark}
        alt="decor"
        className="bg-primary-0/10 rounded-xl px-3 py-6 w-12 h-18"
      />
      <div>
        <h3 className="font-medium text-base text-primary-0">{title}</h3>
        <p className="text-base text-primary-0/70">{text}</p>
      </div>
    </div>
  );
}

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
        <h2 className="rounded-full border border-primary-400 flex py-2 px-3 gap-2 w-auto max-w-max shadow text-base items-center justify-center font-medium mx-auto mb-5 text-primary-800">
          <ThemeImage srcDark="/icons/AIdark.svg" srcLight="/icons/AI.svg" alt="decoration" className="w-5 h-5" />
          Generative <span className="hidden md:block">Business</span> Intelligence for Analysts
        </h2>
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
      <section className="py-14 px-5 max-w-360 m-auto md:pt-32 md:pb-28 md:px-14 lg:px-28">
        <h2 className="font-DM font-bold text-[2.4rem] text-center mb-4">Key Features and Capabilities</h2>
        <p className="text-base text-primary-800 text-center mb-12 md:mb-20">
          Specify helps you gain control of your design system across teams and products.
        </p>

        <div className="flex flex-col gap-10 md:gap-16 lg:gap-28">
          {Features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              text={feature.text}
              content={feature.content}
              index={index}
            />
          ))}
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="py-14 px-5 max-w-360 m-auto md:pt-32 md:pb-28 md:px-14 lg:px-28 h-dvh md:h-187.5 lg:h-177.5 flex flex-col justify-between">
        <div>
          <h2 className="font-DM font-bold text-[2.4rem] text-center mb-4">The Neuros Experience</h2>
          <p className="text-base text-primary-800 text-center mb-12 md:mb-20 max-w-200 m-auto">
            At Neuros, we pride ourselves on delivering top-notch AI-driven business analytics. But don&apos;t just take
            our word for it. Hear what our satisfied users have to say.
          </p>
        </div>
        <Slider />
      </section>
      <section data-aos="fade-up" className="max-w-360 lg:px-28 lg:mx-auto">
        <div className="bg-accent-600 pt-8 pb-14 px-8 my-14 md:rounded-[2rem] md:p-14 md:my-20 md:mx-8 lg:max-w-301 lg:mx-auto flex flex-col gap-10 lg:flex-row relative overflow-hidden">
          <ThemeImage
            srcDark="/images/Mask_groupdark.png"
            srcLight="/images/Mask_group.png"
            alt="play"
            className="w-full h-auto lg:h-full lg:w-auto absolute object-contain bottom-0 left-0"
          />
          <div className="flex-1">
            <h2 className="font-DM font-bold text-4xl mb-10 md:text-5xl text-primary-0">
              Revolutionizing Business Decisions with AI-Powered Analytics
            </h2>
            <button className="font-DM font-bold text-base text-primary-0 bg-gradient-to-br from-primary-0/10 to-primary-0/25 backdrop-blur-2 rounded-xl py-4 px-8 w-full md:w-auto flex gap-2 justify-center">
              Start your free trial
              <ThemeImage
                srcLight="/icons/staricon.svg"
                srcDark="/icons/staricondark.svg"
                alt="decor"
                className="w-6 h-6"
              />
            </button>
          </div>
          <div className="flex flex-col gap-5 flex-1 lg:max-w-95">
            {Benefits.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="px-5 max-w-360 m-auto pt-32 pb-28 md:px-8 lg:px-28">
        <h2 className="rounded-full border border-primary-400 flex py-2 px-3 gap-2 w-auto max-w-max shadow text-base items-center justify-center font-medium mx-auto mb-5 text-primary-800">
          <img src="/icons/AI.svg" alt="decoration" className="w-5 h-5" />
          Applications
        </h2>
        <h2 className="font-DM font-bold text-[2.4rem] text-center mb-4">Insights and predictions made easy</h2>
        <p className="text-base text-primary-800 mb-14 text-center">
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
    </>
  );
}
