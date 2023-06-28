import React, { useState } from "react";

const Playlist = () => {
  return (
    <div>
      <svg
        width="200"
        height="191"
        viewBox="0 0 200 191"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.525635"
          y="51.4336"
          width="126"
          height="144"
          rx="8"
          transform="rotate(-15 0.525635 51.4336)"
          fill="#F1EEEE"
        />
        <rect
          x="1.75038"
          y="52.1407"
          width="124"
          height="142"
          rx="7"
          transform="rotate(-15 1.75038 52.1407)"
          stroke="#FF3A5A"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <rect
          x="78.27"
          y="19"
          width="126"
          height="144"
          rx="8"
          transform="rotate(15 78.27 19)"
          fill="#F1EEEE"
        />
        <rect
          x="78.9771"
          y="20.2247"
          width="124"
          height="142"
          rx="7"
          transform="rotate(15 78.9771 20.2247)"
          stroke="#FF3A5A"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <rect x="37" width="126" height="189" rx="8" fill="#F1EEEE" />
        <rect
          x="38"
          y="1"
          width="124"
          height="187"
          rx="7"
          stroke="#FF3A5A"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <g clipPath="url(#clip0_219_16)">
          <path
            d="M106.333 101.333L129.667 86.3332L106.333 71.3332V101.333ZM94.6666 113C92.8333 113 91.2644 112.348 89.96 111.043C88.6533 109.737 88 108.167 88 106.333V66.3332C88 64.4998 88.6533 62.9298 89.96 61.6232C91.2644 60.3187 92.8333 59.6665 94.6666 59.6665H134.667C136.5 59.6665 138.07 60.3187 139.377 61.6232C140.681 62.9298 141.333 64.4998 141.333 66.3332V106.333C141.333 108.167 140.681 109.737 139.377 111.043C138.07 112.348 136.5 113 134.667 113H94.6666ZM81.3333 126.333C79.5 126.333 77.9311 125.681 76.6266 124.377C75.32 123.07 74.6666 121.5 74.6666 119.667V72.9998H81.3333V119.667H128V126.333H81.3333Z"
            fill="#FF3A5A"
            fillOpacity="0.7"
          />
          <path
            d="M78 70C78.2833 70 78.521 69.904 78.713 69.712C78.9043 69.5207 79 69.2833 79 69V66H82.025C82.3083 66 82.5417 65.904 82.725 65.712C82.9083 65.5207 83 65.2833 83 65C83 64.7167 82.904 64.479 82.712 64.287C82.5207 64.0957 82.2833 64 82 64H79V60.975C79 60.6917 78.9043 60.4583 78.713 60.275C78.521 60.0917 78.2833 60 78 60C77.7167 60 77.4793 60.0957 77.288 60.287C77.096 60.479 77 60.7167 77 61V64H73.975C73.6917 64 73.4583 64.0957 73.275 64.287C73.0917 64.479 73 64.7167 73 65C73 65.2833 73.0957 65.5207 73.287 65.712C73.479 65.904 73.7167 66 74 66H77V69.025C77 69.3083 77.096 69.5417 77.288 69.725C77.4793 69.9083 77.7167 70 78 70ZM78 75C76.6167 75 75.3167 74.7373 74.1 74.212C72.8833 73.6873 71.825 72.975 70.925 72.075C70.025 71.175 69.3127 70.1167 68.788 68.9C68.2627 67.6833 68 66.3833 68 65C68 63.6167 68.2627 62.3167 68.788 61.1C69.3127 59.8833 70.025 58.825 70.925 57.925C71.825 57.025 72.8833 56.3123 74.1 55.787C75.3167 55.2623 76.6167 55 78 55C79.3833 55 80.6833 55.2623 81.9 55.787C83.1167 56.3123 84.175 57.025 85.075 57.925C85.975 58.825 86.6873 59.8833 87.212 61.1C87.7373 62.3167 88 63.6167 88 65C88 66.3833 87.7373 67.6833 87.212 68.9C86.6873 70.1167 85.975 71.175 85.075 72.075C84.175 72.975 83.1167 73.6873 81.9 74.212C80.6833 74.7373 79.3833 75 78 75Z"
            fill="#FF3A5A"
          />
        </g>
        <defs>
          <clipPath id="clip0_219_16">
            <rect
              width="80"
              height="80"
              fill="white"
              transform="translate(68 53)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const AddToPlaylistWhite = ({}) => {
  const [hover, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="3" width="36" height="4" rx="2" fill="#D9D9D9" />
        <rect x="2" y="33" width="36" height="4" rx="2" fill="#D9D9D9" />
        <rect x="2" y="18" width="36" height="4" rx="2" fill="#D9D9D9" />
      </svg>
    </div>
  );
};
const Delete = () => {
  const [hover, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ic:baseline-delete">
          <path
            id="Vector"
            d="M9.99992 31.6667C9.99992 33.5 11.4999 35 13.3333 35H26.6666C28.4999 35 29.9999 33.5 29.9999 31.6667V11.6667H9.99992V31.6667ZM31.6666 6.66667H25.8333L24.1666 5H15.8333L14.1666 6.66667H8.33325V10H31.6666V6.66667Z"
            fill={hover ? "#FF3354" : "white"}
          />
        </g>
      </svg>
    </div>
  );
};

const AddToPlaylist = () => {
  const [hover, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={hover ? "#FF3354" : "#383838"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.3333 10.8333C13.5694 10.8333 13.7675 10.7533 13.9275 10.5933C14.0875 10.4333 14.1672 10.2356 14.1667 10C14.1667 9.76389 14.0867 9.56584 13.9267 9.40584C13.7667 9.24583 13.5689 9.16611 13.3333 9.16667H10C9.76389 9.16667 9.56583 9.24667 9.40583 9.40667C9.24583 9.56667 9.16611 9.76445 9.16667 10C9.16667 10.2361 9.24667 10.4342 9.40667 10.5942C9.56667 10.7542 9.76445 10.8339 10 10.8333H13.3333ZM13.3333 7.5C13.5694 7.5 13.7675 7.42 13.9275 7.26C14.0875 7.1 14.1672 6.90222 14.1667 6.66667C14.1667 6.43056 14.0867 6.2325 13.9267 6.0725C13.7667 5.9125 13.5689 5.83278 13.3333 5.83334H10C9.76389 5.83334 9.56583 5.91334 9.40583 6.07334C9.24583 6.23334 9.16611 6.43111 9.16667 6.66667C9.16667 6.90278 9.24667 7.10084 9.40667 7.26084C9.56667 7.42084 9.76445 7.50056 10 7.5H13.3333ZM14.1667 16.6667H12.5C12.2639 16.6667 12.0658 16.5867 11.9058 16.4267C11.7458 16.2667 11.6661 16.0689 11.6667 15.8333C11.6667 15.5972 11.7467 15.3992 11.9067 15.2392C12.0667 15.0792 12.2644 14.9994 12.5 15H14.1667V13.3333C14.1667 13.0972 14.2467 12.8992 14.4067 12.7392C14.5667 12.5792 14.7644 12.4994 15 12.5C15.2361 12.5 15.4342 12.58 15.5942 12.74C15.7542 12.9 15.8339 13.0978 15.8333 13.3333V15H17.5C17.7361 15 17.9342 15.08 18.0942 15.24C18.2542 15.4 18.3339 15.5978 18.3333 15.8333C18.3333 16.0694 18.2533 16.2675 18.0933 16.4275C17.9333 16.5875 17.7356 16.6672 17.5 16.6667H15.8333V18.3333C15.8333 18.5694 15.7533 18.7675 15.5933 18.9275C15.4333 19.0875 15.2356 19.1672 15 19.1667C14.7639 19.1667 14.5658 19.0867 14.4058 18.9267C14.2458 18.7667 14.1661 18.5689 14.1667 18.3333V16.6667ZM6.66667 14.1667C6.90278 14.1667 7.10084 14.0867 7.26084 13.9267C7.42084 13.7667 7.50056 13.5689 7.5 13.3333C7.5 13.0972 7.42 12.8992 7.26 12.7392C7.1 12.5792 6.90222 12.4994 6.66667 12.5C6.43056 12.5 6.2325 12.58 6.0725 12.74C5.9125 12.9 5.83278 13.0978 5.83333 13.3333C5.83333 13.5694 5.91333 13.7675 6.07333 13.9275C6.23333 14.0875 6.43111 14.1672 6.66667 14.1667ZM6.66667 10.8333C6.90278 10.8333 7.10084 10.7533 7.26084 10.5933C7.42084 10.4333 7.50056 10.2356 7.5 10C7.5 9.76389 7.42 9.56584 7.26 9.40584C7.1 9.24583 6.90222 9.16611 6.66667 9.16667C6.43056 9.16667 6.2325 9.24667 6.0725 9.40667C5.9125 9.56667 5.83278 9.76445 5.83333 10C5.83333 10.2361 5.91333 10.4342 6.07333 10.5942C6.23333 10.7542 6.43111 10.8339 6.66667 10.8333ZM6.66667 7.5C6.90278 7.5 7.10084 7.42 7.26084 7.26C7.42084 7.1 7.50056 6.90222 7.5 6.66667C7.5 6.43056 7.42 6.2325 7.26 6.0725C7.1 5.9125 6.90222 5.83278 6.66667 5.83334C6.43056 5.83334 6.2325 5.91334 6.0725 6.07334C5.9125 6.23334 5.83278 6.43111 5.83333 6.66667C5.83333 6.90278 5.91333 7.10084 6.07333 7.26084C6.23333 7.42084 6.43111 7.50056 6.66667 7.5ZM4.16667 17.5C3.70833 17.5 3.31583 17.3367 2.98917 17.01C2.6625 16.6833 2.49945 16.2911 2.5 15.8333V4.16667C2.5 3.70833 2.66333 3.31583 2.99 2.98917C3.31667 2.6625 3.70889 2.49945 4.16667 2.5H15.8333C16.2917 2.5 16.6842 2.66333 17.0108 2.99C17.3375 3.31667 17.5006 3.70889 17.5 4.16667V11.5208C17.125 11.2986 16.7256 11.1319 16.3017 11.0208C15.8778 10.9097 15.4439 10.8542 15 10.8542C14.2639 10.8542 13.5764 11 12.9375 11.2917C12.2986 11.5833 11.75 11.9861 11.2917 12.5H10C9.76389 12.5 9.56583 12.58 9.40583 12.74C9.24583 12.9 9.16611 13.0978 9.16667 13.3333C9.16667 13.5694 9.24667 13.7675 9.40667 13.9275C9.56667 14.0875 9.76445 14.1672 10 14.1667H10.2917C10.1944 14.4306 10.1214 14.7014 10.0725 14.9792C10.0236 15.2569 9.99945 15.5417 10 15.8333C10 16.1111 10.0208 16.3889 10.0625 16.6667C10.1042 16.9444 10.1736 17.2222 10.2708 17.5H4.16667Z" />
      </svg>
    </div>
  );
};

type addToPlaylistButton = {
  initialColor: string,
  role?: string,
  height: string,
  width: string
}

// TD: Create a single Add to Playlist button component and modify where it has been used before
// Convert all svg components suffixed with -Test into single use components
const AddToPlaylistTest = ({
  initialColor,
  role,
  height,
  width,
}: addToPlaylistButton) => {
  const [hover, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={()=> setClicked(!clicked)}
    >
      <svg
        role={role}
        height={height}
        width={width}
        viewBox="0 0 24 24"
        data-encore-id="icon"
      >
        <path
          d="M13.3333 10.8333C13.5694 10.8333 13.7675 10.7533 13.9275 10.5933C14.0875 10.4333 14.1672 10.2356 14.1667 10C14.1667 9.76389 14.0867 9.56584 13.9267 9.40584C13.7667 9.24583 13.5689 9.16611 13.3333 9.16667H10C9.76389 9.16667 9.56583 9.24667 9.40583 9.40667C9.24583 9.56667 9.16611 9.76445 9.16667 10C9.16667 10.2361 9.24667 10.4342 9.40667 10.5942C9.56667 10.7542 9.76445 10.8339 10 10.8333H13.3333ZM13.3333 7.5C13.5694 7.5 13.7675 7.42 13.9275 7.26C14.0875 7.1 14.1672 6.90222 14.1667 6.66667C14.1667 6.43056 14.0867 6.2325 13.9267 6.0725C13.7667 5.9125 13.5689 5.83278 13.3333 5.83334H10C9.76389 5.83334 9.56583 5.91334 9.40583 6.07334C9.24583 6.23334 9.16611 6.43111 9.16667 6.66667C9.16667 6.90278 9.24667 7.10084 9.40667 7.26084C9.56667 7.42084 9.76445 7.50056 10 7.5H13.3333ZM14.1667 16.6667H12.5C12.2639 16.6667 12.0658 16.5867 11.9058 16.4267C11.7458 16.2667 11.6661 16.0689 11.6667 15.8333C11.6667 15.5972 11.7467 15.3992 11.9067 15.2392C12.0667 15.0792 12.2644 14.9994 12.5 15H14.1667V13.3333C14.1667 13.0972 14.2467 12.8992 14.4067 12.7392C14.5667 12.5792 14.7644 12.4994 15 12.5C15.2361 12.5 15.4342 12.58 15.5942 12.74C15.7542 12.9 15.8339 13.0978 15.8333 13.3333V15H17.5C17.7361 15 17.9342 15.08 18.0942 15.24C18.2542 15.4 18.3339 15.5978 18.3333 15.8333C18.3333 16.0694 18.2533 16.2675 18.0933 16.4275C17.9333 16.5875 17.7356 16.6672 17.5 16.6667H15.8333V18.3333C15.8333 18.5694 15.7533 18.7675 15.5933 18.9275C15.4333 19.0875 15.2356 19.1672 15 19.1667C14.7639 19.1667 14.5658 19.0867 14.4058 18.9267C14.2458 18.7667 14.1661 18.5689 14.1667 18.3333V16.6667ZM6.66667 14.1667C6.90278 14.1667 7.10084 14.0867 7.26084 13.9267C7.42084 13.7667 7.50056 13.5689 7.5 13.3333C7.5 13.0972 7.42 12.8992 7.26 12.7392C7.1 12.5792 6.90222 12.4994 6.66667 12.5C6.43056 12.5 6.2325 12.58 6.0725 12.74C5.9125 12.9 5.83278 13.0978 5.83333 13.3333C5.83333 13.5694 5.91333 13.7675 6.07333 13.9275C6.23333 14.0875 6.43111 14.1672 6.66667 14.1667ZM6.66667 10.8333C6.90278 10.8333 7.10084 10.7533 7.26084 10.5933C7.42084 10.4333 7.50056 10.2356 7.5 10C7.5 9.76389 7.42 9.56584 7.26 9.40584C7.1 9.24583 6.90222 9.16611 6.66667 9.16667C6.43056 9.16667 6.2325 9.24667 6.0725 9.40667C5.9125 9.56667 5.83278 9.76445 5.83333 10C5.83333 10.2361 5.91333 10.4342 6.07333 10.5942C6.23333 10.7542 6.43111 10.8339 6.66667 10.8333ZM6.66667 7.5C6.90278 7.5 7.10084 7.42 7.26084 7.26C7.42084 7.1 7.50056 6.90222 7.5 6.66667C7.5 6.43056 7.42 6.2325 7.26 6.0725C7.1 5.9125 6.90222 5.83278 6.66667 5.83334C6.43056 5.83334 6.2325 5.91334 6.0725 6.07334C5.9125 6.23334 5.83278 6.43111 5.83333 6.66667C5.83333 6.90278 5.91333 7.10084 6.07333 7.26084C6.23333 7.42084 6.43111 7.50056 6.66667 7.5ZM4.16667 17.5C3.70833 17.5 3.31583 17.3367 2.98917 17.01C2.6625 16.6833 2.49945 16.2911 2.5 15.8333V4.16667C2.5 3.70833 2.66333 3.31583 2.99 2.98917C3.31667 2.6625 3.70889 2.49945 4.16667 2.5H15.8333C16.2917 2.5 16.6842 2.66333 17.0108 2.99C17.3375 3.31667 17.5006 3.70889 17.5 4.16667V11.5208C17.125 11.2986 16.7256 11.1319 16.3017 11.0208C15.8778 10.9097 15.4439 10.8542 15 10.8542C14.2639 10.8542 13.5764 11 12.9375 11.2917C12.2986 11.5833 11.75 11.9861 11.2917 12.5H10C9.76389 12.5 9.56583 12.58 9.40583 12.74C9.24583 12.9 9.16611 13.0978 9.16667 13.3333C9.16667 13.5694 9.24667 13.7675 9.40667 13.9275C9.56667 14.0875 9.76445 14.1672 10 14.1667H10.2917C10.1944 14.4306 10.1214 14.7014 10.0725 14.9792C10.0236 15.2569 9.99945 15.5417 10 15.8333C10 16.1111 10.0208 16.3889 10.0625 16.6667C10.1042 16.9444 10.1736 17.2222 10.2708 17.5H4.16667Z"
          fill={hover ? initialColor : "#383838"}
        >
        </path>
      </svg>
    </div>
  );
};

export { Playlist, AddToPlaylist, AddToPlaylistWhite, AddToPlaylistTest };
