import { ThemeImage, FAQ } from '@/components';

export default function Page() {
  return (
    <>
      <section className="py-14 px-5 max-w-360 m-auto md:pt-32 md:pb-28 md:px-14 lg:px-28">
        <h2 className="font-DM font-bold text-[2.4rem] text-center mb-4 max-w-190 mx-auto">
          Tailored Plans that Empower Your Business at Every Stage
        </h2>
        <p className="text-base text-primary-800 text-center mb-12 md:mb-20 max-w-190 mx-auto">
          Neuros offers a range of pricing plans designed to fit your business's unique needs and scale. Explore our
          options and find the perfect match to elevate your data analytics journey.
        </p>
      </section>
      <FAQ />
    </>
  );
}
