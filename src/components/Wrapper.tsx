import { ReactNode, HTMLAttributes, ElementType } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  animate?: boolean;
}

const Wrapper = ({
  children,
  as = 'section',
  className = '',
  id = '',
  animate = true,
  ...rest
}: Props & MotionProps) => {
  const baseClasses =
    'min-h-screen flex flex-col justify-center py-24 md:py-32';

  if (animate) {
    const MotionTag = motion(as);
    return (
      <MotionTag id={id} className={`${baseClasses} ${className}`} {...rest}>
        {children}
      </MotionTag>
    );
  }

  if (as === 'section') {
    return (
      <motion.section
        id={id}
        className={`${baseClasses} ${className}`}
        {...rest}
      >
        {children}
      </motion.section>
    );
  }

  const CustomTag = `${as}` as ElementType;

  return (
    <CustomTag id={id} className={`${baseClasses} ${className}`} {...rest}>
      {children}
    </CustomTag>
  );
};

export default Wrapper;
