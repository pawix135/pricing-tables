import classNames from "classnames";
import arrow from "../../assets/arrow-right.png";
import woman from "../../assets/woman.png";

interface Props {
  order?: number;
}

const SaveMore: React.FunctionComponent<Props> = ({ order }) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-5 hover:bg-[#232323] transition duration-200 bg-[#2E6434] rounded-[20px] px-[40px] pt-[40px] mx-5 max-w-[400px] shadow-[4px_5px_10px_rgba(0,0,0,0.3)] ",
        order ? `order-[${order}]` : ""
      )}
    >
      <h2 className="text-white">
        <span className="text-2xl">Save More</span>
        <br />
        <span className="font-bold text-3xl leading-relaxed">
          With Goodplans.
        </span>
      </h2>
      <p className="text-white text-lg font-normal text-justify leading-6">
        Choose a plan and get onboard in minutes. Then get $100 credits for your
        next payment.
      </p>
      <img src={arrow} className="-mb-[30px] w-[40px] h-[40px]" />
      <img src={woman} className="mt-auto" />
    </div>
  );
};
export default SaveMore;
