import {toast} from "react-toastify";

function successToast(message: string) {
  return toast.success(message)
}

function errorToast(message: string) {
  return toast.error(message)
}

function infoToast(message: string) {
  return toast.info(message)
}

function warnToast(message: string) {
  return toast.warn(message)
}

export {successToast, errorToast, infoToast, warnToast}
