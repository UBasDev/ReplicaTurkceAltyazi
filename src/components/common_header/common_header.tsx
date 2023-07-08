import Image from "next/image";
import component_styles from "./common_header.module.css";
import homepage_logo from "@/../public/homepage_logo.png";
import Header_Search_Form from "./header_search_form/header_search_form";

const header_classes1 = "col-start-2 col-end-24";
const header_classes2 = "grid grid-cols-24 gap-0 px-2";
const header_classes3 = "col-span-4 flex justify-center";
const header_classes4 = "col-span-10 px-10";
const hompage_logo_metadata = "Homepage Logo UCBDev";

export default function Common_Header(): JSX.Element {
  return (
    <>
      <div className={`${header_classes1} ${component_styles.header_wrapper}`}>
        <div className={header_classes2}>
          <div className={header_classes3}>
            <Image
              placeholder="blur"
              priority
              src={homepage_logo}
              alt={hompage_logo_metadata}
            />
          </div>
          <div className={header_classes4}>
            <Header_Search_Form />
          </div>
          <div className="col-span-7 bg-yellow-500">header right</div>
        </div>
        <p>header works!</p>
      </div>
    </>
  );
}
