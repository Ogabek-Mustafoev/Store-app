import { filterInputs } from "@/constants";
import { Dispatch, SetStateAction } from "react";

type Props = {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
};

export default function FilterProduct({ type, setType }: Props) {
  return (
    <ul className="mx-auto w-full items-center rounded-lg border border-gray-100 bg-white text-sm font-medium text-gray-900 shadow sm:flex lg:w-3/4">
      {filterInputs.map(({ id, style, label }, idx) => (
        <li className={style} key={idx}>
          <div className="flex items-center pl-3">
            <input
              id={id}
              type="radio"
              name="list-radio"
              className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100"
              checked={type === id}
              onChange={() => setType(id)}
            />
            <label
              htmlFor={id}
              className="ml-2 w-full cursor-pointer py-3 text-sm font-medium text-gray-900"
            >
              {label}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}
