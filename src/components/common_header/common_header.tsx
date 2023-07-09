import Image from "next/image";
import component_styles from "./common_header.module.css";
import homepage_logo from "@/../public/homepage_logo.png";
import Header_Search_Form from "./header_search_form/header_search_form";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Component_Props {
  children?: any;
  classes: string;
}

const header_classes1 = "col-start-2 col-end-24 py-2";
const header_classes2 = "grid grid-cols-24 gap-0 px-2";
const header_classes3 = "col-span-4 flex justify-center";
const header_classes4 = "lg:col-span-12 xl:col-span-10 px-10";
const header_classes5 = "global_scale_up_animation";
const hompage_logo_metadata = "Homepage Logo UCBDev";

export default function Common_Header(props: Component_Props): JSX.Element {
  return (
    <>
      <div
        className={`${header_classes1} ${component_styles.header_wrapper} ${props.classes}`}
      >
        <div className={header_classes2}>
          <div className={header_classes3}>
            <Image
              className={header_classes5}
              placeholder="blur"
              priority
              src={homepage_logo}
              alt={hompage_logo_metadata}
            />
          </div>
          <div className="lg:col-span-2 xl:col-span-3"></div>
          <div className={header_classes4}>
            <Header_Search_Form />
          </div>
          <div className="lg:col-span-6 xl:col-span-7 flex items-start justify-end gap-x-2">
            <FontAwesomeIcon
              style={{ color: "rgb(30, 138, 194)" }}
              className="text-2xl bg-white rounded-full p-1.5 global_rotate_360_degree"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              style={{ color: "rgb(30, 138, 194)" }}
              className="text-2xl bg-white rounded-full p-1.5 global_rotate_360_degree"
              icon={faGithub}
            />
            <FontAwesomeIcon
              style={{ color: "rgb(30, 138, 194)" }}
              className="text-2xl bg-white rounded-full p-1.5 global_rotate_360_degree"
              icon={faLinkedin}
            />
          </div>
        </div>
        <p>header works!</p>
      </div>
    </>
  );
}
