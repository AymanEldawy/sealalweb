import React from "react";

const SupportIcon = ({ ...classes }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...classes}
    >
      <path
        d="M9.08005 17.9907C9.38474 18.6461 9.87035 19.2008 10.4797 19.5895C11.0891 19.9782 11.7968 20.1847 12.5195 20.1847C13.2423 20.1847 13.95 19.9782 14.5594 19.5895C15.1688 19.2008 15.6544 18.6461 15.959 17.9907C15.5915 17.5792 15.2501 17.145 14.937 16.6907L14.929 16.6807C14.2463 17.2331 13.3901 17.526 12.512 17.5077C11.5526 17.5129 10.629 17.1434 9.93805 16.4777C9.89705 16.4407 9.85905 16.4047 9.82005 16.3657C9.72005 16.6327 9.60205 16.9527 9.47205 17.2497C9.36325 17.5094 9.23244 17.7593 9.08105 17.9967L9.08005 17.9907ZM16.428 17.7487C17.949 18.7367 21.411 18.9927 22.757 19.7427C23.2238 19.9936 23.6326 20.3397 23.9571 20.7587C24.6471 21.6707 26.0571 24.9827 23.7701 25.1587H19.46L19.993 19.2267C18.7609 19.0324 17.5685 18.6396 16.462 18.0637C16.397 18.0637 16.372 18.0927 16.2771 18.1777C15.42 21.4507 10.161 21.9307 8.69905 18.1047C7.55068 18.6702 6.31846 19.0464 5.05005 19.2187L5.88105 25.1587H1.25505C-1.03595 24.9837 0.377049 21.6727 1.06805 20.7587C1.39248 20.3397 1.80131 19.9936 2.26805 19.7427C3.63405 18.9777 7.19305 18.7277 8.67205 17.6977C8.80211 17.4877 8.91514 17.2677 9.01005 17.0397C9.17905 16.6527 9.33405 16.2287 9.43405 15.9397C9.02819 15.441 8.65794 14.9144 8.32605 14.3637L7.24505 12.6407C7.16576 12.6334 7.08739 12.6183 7.01105 12.5957C6.12905 12.3187 5.39405 10.3557 5.53905 9.42868C5.62005 8.90368 5.80805 8.71368 6.10705 8.59968C6.09239 8.55584 6.08496 8.50991 6.08505 8.46368V6.48368C6.09893 5.73355 6.29965 4.99871 6.66905 4.34568C7.06811 3.62629 7.6042 2.99202 8.24705 2.47868C9.54127 1.48574 11.1352 0.963373 12.766 0.997682C14.3872 0.994478 15.959 1.55517 17.212 2.58368C17.8187 3.10652 18.3095 3.75025 18.653 4.47368C18.9978 5.17537 19.1823 5.94494 19.1931 6.72668V8.35968C19.1958 8.41649 19.187 8.47328 19.1672 8.52659C19.1474 8.5799 19.1169 8.62863 19.0777 8.66982C19.0385 8.71101 18.9913 8.7438 18.939 8.76621C18.8867 8.78862 18.8304 8.80017 18.7736 8.80017C18.7167 8.80017 18.6604 8.78862 18.6081 8.76621C18.5558 8.7438 18.5086 8.71101 18.4694 8.66982C18.4302 8.62863 18.3997 8.5799 18.3799 8.52659C18.3601 8.47328 18.3513 8.41649 18.354 8.35968V6.72668C18.3447 6.0704 18.1904 5.42431 17.9021 4.83468C17.6094 4.21689 17.1904 3.66738 16.6721 3.22168C15.5682 2.31832 14.1844 1.82724 12.758 1.83268C11.3177 1.80016 9.90962 2.26176 8.76805 3.14068C8.21219 3.58325 7.74816 4.13016 7.40205 4.75068C7.10044 5.28121 6.93581 5.87855 6.92305 6.48868V8.37768H6.93505L7.28105 8.80768C7.25205 8.07068 7.25005 7.28468 7.28105 6.58968C7.30534 6.34438 7.35153 6.10175 7.41905 5.86468C7.73071 4.85324 8.40575 3.99296 9.31405 3.44968C10.4763 2.70754 11.8563 2.38249 13.2277 2.52785C14.599 2.67322 15.8802 3.28036 16.861 4.24968C17.5368 5.00914 17.9247 5.98162 17.9571 6.99768L17.8881 9.90368C18.0335 9.94077 18.1658 10.0175 18.2701 10.1254C18.3745 10.2333 18.4468 10.3681 18.479 10.5147C18.54 11.0441 18.4322 11.5792 18.171 12.0437L18.153 12.0807L16.876 14.1807C16.4443 14.9606 15.9191 15.6849 15.312 16.3377L15.351 16.3907C15.676 16.8687 16.036 17.322 16.428 17.7467V17.7487ZM7.86605 10.3107L8.35905 11.6627C8.40978 11.792 8.42598 11.9322 8.40605 12.0697C9.17224 12.9214 10.1536 13.5511 11.247 13.8927C11.3013 13.7609 11.3884 13.6453 11.5 13.5567C11.7609 13.4295 12.0477 13.3647 12.3379 13.3675C12.6281 13.3703 12.9137 13.4405 13.172 13.5727C13.2934 13.7027 13.3666 13.8703 13.3795 14.0477C13.3924 14.225 13.3443 14.4015 13.243 14.5477C12.838 15.0897 11.154 14.6337 10.589 14.4477C9.66077 14.0594 8.81297 13.5015 8.08905 12.8027L8.85705 14.0227C9.27131 14.7435 9.77755 15.4074 10.363 15.9977C10.9393 16.5551 11.7103 16.8658 12.512 16.8637C12.9316 16.8715 13.3486 16.7959 13.7387 16.6415C14.1289 16.487 14.4845 16.2566 14.785 15.9637C15.3921 15.3307 15.9132 14.6206 16.335 13.8517L17.5931 11.7747C17.7864 11.4393 17.8791 11.0553 17.8601 10.6687C17.827 10.5427 17.689 10.4817 17.455 10.4687C17.404 10.4687 17.355 10.4687 17.302 10.4687C17.2491 10.4687 17.1861 10.4747 17.125 10.4807C17.0916 10.4829 17.058 10.4809 17.025 10.4747C16.9094 10.4797 16.7936 10.4737 16.6791 10.4567L17.111 8.54468C13.906 9.04968 11.511 6.66868 8.12005 8.06768L8.36405 10.3217C8.23483 10.3289 8.10523 10.3235 7.97705 10.3057C7.93908 10.3036 7.90102 10.3036 7.86305 10.3057L7.86605 10.3107Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default SupportIcon;