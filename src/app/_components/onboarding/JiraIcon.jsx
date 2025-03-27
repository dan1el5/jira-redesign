import React from "react";

const JiraIcon = () => (
  <svg
    className="h-8 w-8 text-blue-600"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9962 0L29.9925 14.3169H21.3284C18.3802 14.3169 15.9962 11.9212 15.9962 8.95804V0Z"
      fill="#2684FF"
    />
    <path
      d="M15.9967 17.683L2 32.0001H10.664C13.6123 32.0001 15.9967 29.6044 15.9967 26.6416V17.683Z"
      fill="#2684FF"
    />
    <path
      d="M15.9962 8.95804C15.9962 11.9212 18.3802 14.3169 21.3284 14.3169H29.9925L15.9962 0V8.95804Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M15.9967 26.6416C15.9967 29.6044 13.6123 32.0001 10.664 32.0001H2L15.9967 17.683V26.6416Z"
      fill="url(#paint1_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="16.3774"
        y1="7.69321"
        x2="25.4223"
        y2="12.8991"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.18" stopColor="#0052CC" stopOpacity="0" />
        <stop offset="1" stopColor="#0052CC" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="15.6155"
        y1="24.2981"
        x2="6.57058"
        y2="19.0922"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.18" stopColor="#0052CC" stopOpacity="0" />
        <stop offset="1" stopColor="#0052CC" stopOpacity="0.8" />
      </linearGradient>
    </defs>
  </svg>
);

export default JiraIcon;