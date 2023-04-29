import React from "react";

const HeartIcon = ({ ...classes }) => {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...classes}>
      <path d="M11.62 18.8096C11.28 18.9296 10.72 18.9296 10.38 18.8096C7.48 17.8196 1 13.6896 1 6.68961C1 3.59961 3.49 1.09961 6.56 1.09961C8.38 1.09961 9.99 1.97961 11 3.33961C12.01 1.97961 13.63 1.09961 15.44 1.09961C18.51 1.09961 21 3.59961 21 6.68961C21 13.6896 14.52 17.8196 11.62 18.8096Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
};

export default HeartIcon;
