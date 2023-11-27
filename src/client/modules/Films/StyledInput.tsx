import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
  width: 100%;
  max-width: 400px;
  margin-right: 20px;
`;

const Input = styled.input`
  padding: 10px 30px;
  font-size: 16px;
  border: 1px solid rgba(66, 66, 66, 0.35);
  border-radius: 5px;
  outline: none;
  width: 100%;
  background-color: transparent;

  &:hover {
    border-color: black;
  }
  &:focus {
    border-color: #007bff;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: ${grey[600]};
`;

const StyledClearIcon = styled(ClearIcon)`
  position: absolute;
  cursor: pointer;
  right: 10px;
  color: ${grey[600]};
`;

type StyledInputProps = {
  onChange: (value: ChangeEvent<HTMLInputElement> | { target: { value: string } }) => void;
  placeholder?: string;
};

const StyledInput = ({ onChange, placeholder }: StyledInputProps) => {
  const [params] = useSearchParams();
  const [hover, setHover] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [debounced, setDebounced] = useState<string | NodeJS.Timeout>("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setValue(val);
    clearTimeout(debounced);
    const timeoutId = setTimeout(() => {
      setDebounced(event.target.value);
      onChange(event);
    }, 300);

    setDebounced(timeoutId);
  };

  useEffect(() => {
    const par = params.get("s");
    setValue(par ?? "");
  }, []);

  const handleClearClick = () => {
    setValue("");
    onChange({ target: { value: "" } });
  };

  return (
    <SearchInputWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <StyledSearchIcon />
      <Input type="text" value={value} onChange={onChangeHandler} placeholder={placeholder} />
      {value && hover && <StyledClearIcon onClick={handleClearClick} fontSize="small" />}
    </SearchInputWrapper>
  );
};

export default StyledInput;
