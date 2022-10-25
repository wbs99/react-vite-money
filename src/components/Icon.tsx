import cs from "classnames"

type Props = {
  name: string;
  onClick?: () => void
  className?: string;
};

export const Icon: React.FC<Props> = (props) => {
  const { name, onClick, className } = props
  return (
    <svg onClick={onClick} className={cs("icon", className)} >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
