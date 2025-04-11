import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto text-center font-mono mb-5 text-xs">
      <SocialLinks className="flex md:hidden justify-center gap-3 mb-3" />
    </footer>
  );
};

export default Footer;
