import { useEffect, useState } from 'react';
import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';

const About = () => {
  const { title, img, list } = aboutSection;
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, I’m Kade Korn — a data analyst who’s passionate about uncovering
            insights that spark better decisions. I’ve always been drawn to
            understanding how systems work and what stories the numbers are
            trying to tell.
          </p>
          <p>
            I was fortunate to receive a full-ride scholarship and was recruited
            straight out of Arizona State University into Starbucks, where I
            joined their FinTech team. Since then, I’ve worked across enterprise
            systems, building dashboards and pipelines that have helped Finance,
            Legal, and Supply Chain teams move smarter and faster.
          </p>
          <p>
            These days, I’m casually looking for a new home where I can continue
            growing, contribute to meaningful projects, and collaborate with
            curious people who care about doing great work.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
