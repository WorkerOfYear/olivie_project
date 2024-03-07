import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "store/hooks";
import { set_activity } from "store/searchReducer";

interface WhoInputProps {
  who?: string;
}

const WhoInput: FC<WhoInputProps> = ({ who }) => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (who !== undefined) {
      setValue(who);
      dispatch(set_activity(who));
    }
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(set_activity(e.target.value));
  };

  return (
    <>
      <div className="who_input_wrapper">
        <input
          value={value}
          onChange={handleOnChange}
          type="text"
          className="search__what"
          placeholder="WHAT    like guitarist..."
        />
      </div>
    </>
  );
};

export default WhoInput;
