import classNames from "classnames";
import Block from "../Block";

interface Props {
  blocks: BlockType[];
}

const Table: React.FunctionComponent<Props> = ({ blocks }) => {
  return (
    <div
      className={classNames(
        "flex flex-row flex-wrap gap-5 mx-auto justify-center my-auto py-5"
      )}
    >
      {blocks.map((block, i) => {
        return <Block key={i} data={block} />;
      })}
    </div>
  );
};

export default Table;
