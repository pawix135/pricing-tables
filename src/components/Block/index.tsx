import classNames from "classnames";
import circle from "../../assets/circle.png";

interface Props {
  data: BlockType;
}

const Block: React.FunctionComponent<Props> = ({ data }) => {
  return data.customComponent ? (
    <data.customComponent order={data.order} />
  ) : (
    <div
      className={classNames(
        "flex flex-col gap-5 mx-5 rounded-[20px] px-[40px] pt-[40px] min-h-[500px] max-w-[400px] shadow-[4px_5px_10px_rgba(0,0,0,0.3)]"
      )}
    >
      <span className="flex flex-row items-center gap-5">
        <img src={data.icon} />
        <span className="text-3xl font-bold">{data.title}</span>
      </span>
      <p className="text-[#A9A9AA] text-[22px]">What You&apos;ll Get</p>
      <div className="flex flex-col gap-5">
        {data.perks!.map((perk, pI) => (
          <div key={pI} className="flex flex-row gap-2">
            <img src={circle} className="object-contain" />
            <span>{perk}</span>
          </div>
        ))}
      </div>
      <div className="w-full px-[40px] h-[1px] border border-[#A9A9AA] border-dashed"></div>
      <h2 className="mt-3 mb-5">
        <span className="font-bold text-3xl">${data.cost}</span>/
        <span className="text-lg">day</span>
      </h2>
      <button
        className={classNames(
          "mt-auto bg-[#2E6434] text-white mb-6 font-semibold text-xl py-5 rounded-xl hover:bg-[#232323] transition duration-150"
        )}
      >
        Choose
      </button>
    </div>
  );
};

export default Block;
