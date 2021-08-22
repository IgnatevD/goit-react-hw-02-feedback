import s from "./Section.module.css";

const Section = ({ titel, children }) => {
  return (
    <section className={s.sectionConteiner}>
      <h2>{titel}</h2>
      {children}
    </section>
  );
};

export default Section;
