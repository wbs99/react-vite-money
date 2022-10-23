import cs from "classnames"

type Props = {
  name: string;
  className?: string;
};

export const Icon: React.FC<Props> = (props) => {
  const { name, className, } = props
  return (
    <svg className={cs("icon", className)} >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
