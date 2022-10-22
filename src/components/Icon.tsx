import cs from "classnames"

type Props = {
  name: string;
  className?: string;
};

export const Icon = (props: Props) => {
  const { name, className, } = props
  return (
    <svg className={cs("icon", className)} >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
