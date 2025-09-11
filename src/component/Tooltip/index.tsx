
import styles from '@/component/Tooltip/Tooltip.module.css'
type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className={styles["tooltip-container"]}>
      {children}
      <span className={styles["tooltip-text"]}>{text}</span>
    </div>
  );
}
