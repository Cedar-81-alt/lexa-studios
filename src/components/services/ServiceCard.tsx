import React from "react";

interface Params {
  item: {
    title: string;
    content: string;
    action_txt: string;
  };
}

function ServiceCard({ item }: Params) {
  return (
    <div className="border-t border-neon-pink text-royal-purple dark:text-warm-white space-y-4 leading-snug pt-8">
      <h5 className="alt">{item.title}</h5>
      <p className="mt-2">{item.content}</p>
      <button className="mt-4 flex gap-3 items-center p-0 bg-transparent text-black">
        <svg
          width="38"
          height="38"
          className="h-8"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="38" height="38" rx="19" fill="#D9D9D9" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.7834 25.1872C12.6427 25.0465 12.5637 24.8558 12.5637 24.6569C12.5637 24.4579 12.6427 24.2672 12.7834 24.1265L22.8172 14.0927L16.1421 14.0927C16.0415 14.0962 15.9411 14.0795 15.8471 14.0434C15.7531 14.0073 15.6673 13.9527 15.5948 13.8828C15.5223 13.8128 15.4647 13.729 15.4253 13.6363C15.386 13.5436 15.3657 13.4439 15.3657 13.3432C15.3657 13.2424 15.386 13.1427 15.4253 13.05C15.4647 12.9573 15.5223 12.8735 15.5948 12.8035C15.6673 12.7336 15.7531 12.679 15.8471 12.6429C15.9411 12.6068 16.0415 12.5901 16.1421 12.5936H24.6274C24.8262 12.5937 25.0167 12.6727 25.1573 12.8133C25.2978 12.9538 25.3768 13.1444 25.377 13.3432L25.377 21.8284C25.3805 21.9291 25.3637 22.0294 25.3277 22.1235C25.2916 22.2175 25.237 22.3033 25.167 22.3758C25.0971 22.4482 25.0132 22.5059 24.9205 22.5452C24.8278 22.5846 24.7281 22.6049 24.6274 22.6049C24.5267 22.6049 24.427 22.5846 24.3343 22.5452C24.2416 22.5059 24.1578 22.4482 24.0878 22.3758C24.0179 22.3033 23.9632 22.2175 23.9272 22.1235C23.8911 22.0294 23.8743 21.9291 23.8779 21.8284L23.8779 15.1533L13.844 25.1872C13.7034 25.3278 13.5126 25.4069 13.3137 25.4069C13.1148 25.4069 12.924 25.3278 12.7834 25.1872Z"
            fill="#4A0572"
          />
        </svg>
        <p className="text-royal-purple dark:text-warm-white">
          {item.action_txt}
        </p>
      </button>
    </div>
  );
}

export default ServiceCard;
