import { useState } from "react";

const useToggle = () => {
  const [el, setEl] = useState(null);
  const open = Boolean(el);
  const handleClick = (event) => {
    setEl(event.currentTarget);
  };
  const handleClose = () => {
    setEl(null);
  };
  return {
    el,
    open,
    handleClick,
    handleClose,
  };
};
export default useToggle;
