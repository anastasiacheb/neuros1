import { ThemeImage } from '@/components';

interface ButtonProps {
  text: string;
  light?: boolean;
  blue?: boolean;
  small?: boolean;
  srcLight?: string;
  srcDark?: string;
  style?: string;
}

export default function Button({ text, light, blue, small, srcLight, srcDark, style }: ButtonProps) {
  return (
    <>
      <button
        className={`font-DM font-bold py-3 px-5 rounded-xl w-full md:max-w-max transition flex items-center justify-center gap-2
        ${light ? 'border border-primary-400 text-primary-800 hover:border-primary-700 active:border-primary-900' : blue ? 'border border-accent-300 text-accent-600 hover:border-accent-700 active:border-accent-900' : 'text-primary-0 bg-accent-600 hover:bg-accent-700 active:bg-accent-800'} ${small && 'text-sm'} ${style} ?? ''`}>
        {srcLight && srcDark && <ThemeImage srcDark={srcDark} srcLight={srcLight} alt="icon" className="w-5 h-5" />}
        {text}
      </button>
      {/* <button className="font-DM font-bold border border-primary-400 text-primary-800 hover:border-primary-700 active:border-primary-900 py-3 px-5 rounded-xl w-full flex items-center justify-center gap-2 md:max-w-max transition">
        <ThemeImage srcDark="/icons/Licondark.svg" srcLight="/icons/Licon.svg" alt="icon" className="w-5 h-5" />
        Watch video
      </button>
      <button className="font-DM font-bold border border-accent-300 text-accent-600 text-sm hover:border-accent-700 active:border-accent-900 py-3 px-5 rounded-xl items-center justify-center gap-2 max-w-max transition hidden md:flex flex-initial">
        Get a demo
      </button>
      <button className="font-DM font-bold text-primary-0 bg-accent-600 hover:bg-accent-700 text-sm active:bg-accent-800 py-3 px-5 rounded-xl max-w-max transition hidden md:flex flex-initial items-center">
        Start your free trial
      </button> */}
    </>
  );
}
