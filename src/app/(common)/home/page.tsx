import Common_Header from "@/components/common_header/common_header";

export default function Common(): JSX.Element {
  return (
    <>
      <div className="grid grid-cols-24 gap-2">
        <Common_Header />
        <div className="col-start-2 col-end-24">This is main</div>
        <div className="col-start-2 col-end-24">This is bottom</div>
      </div>
    </>
  );
}
