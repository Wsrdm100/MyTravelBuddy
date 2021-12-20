import styles from "./System.module.scss";

const System = () => {
  return (
    <div className="page">
      <div>
        <h1>Heading 1</h1>
        <h1 className="underline">Underline</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          reprehenderit deleniti modi velit numquam, eum suscipit asperiores
          voluptas commodi quis, consectetur itaque iste incidunt officiis
          dolorem vitae. Eos doloremque animi maxime similique expedita
          asperiores in! Ipsam facere culpa quibusdam dolore vitae nemo sint.
          Temporibus, officiis.
        </p>
      </div>
    </div>
  );
};

export default System;
