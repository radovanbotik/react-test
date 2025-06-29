import clsx from "clsx";
import { MiniCartItemRow } from "./MiniCartItemRow";
import classes from "./MiniCartTable.module.css";

export function MiniCartTable({ cartItems }) {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th scope="col" className={clsx(classes["header-cell"], classes["header-cell-left"])}>
            Items
          </th>
          <th scope="col" className={clsx(classes["header-cell"], classes["header-cell-middle"])}>
            Units
          </th>
          <th scope="col" className={clsx(classes["header-cell"], classes["header-cell-right"])}>
            Price
          </th>
        </tr>
      </thead>
      <tbody className="">
        {cartItems.map(item => (
          <MiniCartItemRow item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
