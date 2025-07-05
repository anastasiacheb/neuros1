import { ThemeImage } from '@/components';

const BenefitsData = [
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

export default function Benefits() {
  return (
    <section className="max-w-360 lg:px-28 lg:mx-auto">
      <div className="bg-accent-600 pt-8 pb-14 px-8 my-14 md:rounded-[2rem] md:p-14 md:my-20 md:mx-8 lg:max-w-301 lg:mx-auto flex flex-col gap-10 lg:flex-row relative overflow-hidden">
        <ThemeImage
          srcDark="/images/Mask_groupdark.png"
          srcLight="/images/Mask_group.png"
          alt="play"
          className="w-full h-auto lg:h-full lg:w-auto absolute object-cover bottom-0 left-0"
        />
        <div className="flex-1 relative z-10">
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
        <div className="flex flex-col gap-5 flex-1 lg:max-w-95 relative z-10">
          {BenefitsData.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
