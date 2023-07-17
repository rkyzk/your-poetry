import { useEffect, useState } from "react";

const useToggleModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleModal = () => setShow(!show);
    handleModal();
  }, [show]);
  return { show, setShow };
};

export default useToggleModal;