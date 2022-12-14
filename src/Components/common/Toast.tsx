import React from 'react';
import { ToastContainer } from 'react-toastify';
// this a css them from toastify that we will use in other components
export const Toast: React.FC = () => {
  return (
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
    />
  );
};
