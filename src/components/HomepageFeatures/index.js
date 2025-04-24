import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Explora sin complicaciones',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Este manual está pensado para que puedas dominar el Inspector de una forma intuitiva. Cada sección te guía con imágenes, ejemplos reales y pasos concretos, para que no te pierdas entre tanto código ni opciones. ¡Aprender a inspeccionar elementos nunca fue tan directo!
      </>
    ),
  },
  {
    title: 'Detecta Errores',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Aprende a identificar problemas en tu página usando las herramientas del Inspector. Desde errores de consola hasta recursos que no cargan, este manual te enseña paso a paso cómo encontrarlos, entenderlos y solucionarlos sin complicarte la vida.
      </>
    ),
  },
  {
    title: 'Analiza la Web',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Con el Inspector puedes ver cómo está construida cualquier página: su estructura, estilos, rendimiento y más. Aquí te mostramos cómo usar cada panel para sacarle el jugo al análisis, ya sea que estés optimizando tu propio sitio o espiando cómo lo hacen los demás.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
