import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.scss";

export const ShowToast = ({ type, message }) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "warn":
      toast.warn(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};

export const Notifications = () => {
  return <ToastContainer />;
};
