import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import AppleIntelSvg from "@site/static/img/apple-intel.svg";
import { useColorMode } from "@docusaurus/theme-common";

type InstallMethodItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const InstallMethodList: InstallMethodItem[] = [
  {
    title: "Windows",
    Svg: require("@site/static/img/windows.svg").default,
    description: (
      <>
        Installing MultiSim on Windows is the most simple process, as it's the
        platform MultiSim is made for. Just download the installer and run it.
      </>
    ),
  },
  {
    title: "Apple Silicon",
    Svg: require("@site/static/img/apple-silicon.svg").default,
    description: (
      <>
        Installing MultiSim on Apple Silicon is slightly more complicated, but
        we have a guide to help you through the installation.
      </>
    ),
  },
  {
    title: "Intel Macs",
    Svg: require("@site/static/img/apple-intel.svg").default,
    description: (
      <>
        Installing MultiSim on Intel Macs is only slightly more complicated than
        installing on Windows, and we will have a guide for that too soon!
      </>
    ),
  },
];

function InstallMethods({ title, Svg, description }: InstallMethodItem) {
  const { colorMode } = useColorMode();
  const svgColor = colorMode === "dark" ? "#ffffff" : "#010101";

  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg
          className={styles.featureSvg}
          role="img"
        />
        <style>{`
          .cls-1 {
            fill: ${svgColor};
          }
        `}</style>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {InstallMethodList.map((props, idx) => (
            <InstallMethods key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
