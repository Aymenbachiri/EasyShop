"use client";

type SellProductBtnProp = {
  loading: boolean;
};

export function SellProductBtn({ loading }: SellProductBtnProp) {
  return (
    <button
      className="flex items-center justify-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
      type="submit"
      disabled={loading}
    >
      {loading && (
        <span className="flex items-center justify-center rounded-md text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray="16"
              strokeDashoffset="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3c4.97 0 9 4.03 9 9"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.1s"
                values="16;0"
              />
              <animateTransform
                attributeName="transform"
                dur="0.5s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </path>
          </svg>
        </span>
      )}
      Sell Product
    </button>
  );
}
