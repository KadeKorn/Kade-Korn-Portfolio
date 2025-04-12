import { useContext } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { ListItem, SkillIcon } from '.';
import { SoftwareSkillType } from '../types';
import { getId } from '../utils/helper';
import themeContext from '../context/theme-context';

type Props = {
  title: string;
  points: string[];
  skills: SoftwareSkillType[];
  image?: {
    light: string;
    dark: string;
  };
  className?: string;
} & MotionProps;

const Skill = ({
  title,
  skills,
  points,
  image,
  className = '',
  ...rest
}: Props) => {
  const { isDark } = useContext(themeContext);

  return (
    <motion.div
      className={`flex flex-col gap-y-16 lg:flex-row items-center justify-center ${className}`}
      {...rest}
    >
      {/* Left Side */}
      <div className="space-y-14 lg:w-1/2">
        <h3 className="capitalize text-2xl sm:text-3xl text-center text-accent">
          {title}
        </h3>

        <div className="flex gap-2 justify-center flex-wrap">
          {skills.map(({ name, icon }) => (
            <SkillIcon key={getId()} src={icon} name={name} />
          ))}
        </div>

        <ul className="text-base space-y-2">
          {points.map((point) => (
            <ListItem key={getId()}>{point}</ListItem>
          ))}
        </ul>
      </div>

      {/* Right Side - Static SVG Image */}
      {image && (
        <div className="lg:w-1/2 flex justify-center mt-16 lg:mt-0">
          <img
            src={isDark ? image.dark : image.light}
            alt={`${title} illustration`}
            className="w-full max-w-lg"
          />
        </div>
      )}
    </motion.div>
  );
};

export default Skill;
