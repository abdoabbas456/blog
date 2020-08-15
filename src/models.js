import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }
  useEffect(() => {
    const modelRoot = document.getElementById("modal");
    modelRoot.appendChild(elRef.current);
    return () => modelRoot.removeChild(elRef.current);
  }, []);
  return createPortal(<div>{children}</div>,elRef.current);
};
export default Modal;
