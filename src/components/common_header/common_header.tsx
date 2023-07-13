import Image from "next/image";
import component_css from "./common_header.module.css";
import homepage_logo from "@/../public/homepage_logo.png";
import Header_Search_Form from "./header_search_form/header_search_form";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Header_Navigation from "./header_navigation/header_navigation";

interface Component_Props {
  children?: any;
  classes: string;
}

const component_classes = {
  header_classes1: "col-start-2 col-end-24 pt-2",
  header_classes2: "grid grid-cols-24 gap-0 px-2",
  header_classes3: "col-span-4 flex justify-center",
  header_classes4: "lg:col-span-12 xl:col-span-10 px-10",
  header_classes5: "global_scale_up_animation",
  header_classes6: "lg:col-span-2 xl:col-span-3",
  header_classes7:
    "lg:col-span-6 xl:col-span-7 flex items-start justify-end gap-x-2",
  header_classes8: "bg-white rounded-full p-1.5 global_rotate_360_degree h-6",
};

const hompage_logo_metadata = "Homepage Logo UCBDev";

const component_styles = {
  icon_style: {
    color: "rgb(30, 138, 194)",
  },
};

const component_constants = {
  instagram_url: "https://instagram.com/ugurcanbas_?igshid=MzNlNGNkZWQ4Mg==",
  github_url: "https://github.com/UCB52",
  linkedin_url: "https://www.linkedin.com/in/u%C4%9Furcan-ba%C5%9F-84b91a206",
};

export default function Common_Header(props: Component_Props): JSX.Element {
  return (
    <>
      <div
        className={`${component_classes.header_classes1} ${component_css.header_wrapper} ${props.classes}`}
      >
        <div className={component_classes.header_classes2}>
          <div className={component_classes.header_classes3}>
            <Image
              className={component_classes.header_classes5}
              placeholder="blur"
              priority
              src={homepage_logo}
              alt={hompage_logo_metadata}
            />
          </div>
          <div className={component_classes.header_classes6}></div>
          <div className={component_classes.header_classes4}>
            <Header_Search_Form />
          </div>
          <div className={component_classes.header_classes7}>
            <Link
              target="_blank"
              as={component_constants.instagram_url}
              href={component_constants.instagram_url}
            >
              <FontAwesomeIcon
                style={component_styles.icon_style}
                className={component_classes.header_classes8}
                icon={faInstagram}
              />
            </Link>
            <Link
              target="_blank"
              as={component_constants.github_url}
              href={component_constants.github_url}
            >
              <FontAwesomeIcon
                style={component_styles.icon_style}
                className={component_classes.header_classes8}
                icon={faGithub}
              />
            </Link>
            <Link
              target="_blank"
              as={component_constants.linkedin_url}
              href={component_constants.linkedin_url}
            >
              <FontAwesomeIcon
                style={component_styles.icon_style}
                className={component_classes.header_classes8}
                icon={faLinkedin}
              />
            </Link>
          </div>
        </div>
        <Header_Navigation />
      </div>
    </>
  );
}
