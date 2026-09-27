import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#0f1014]">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#292d35] border-t-[#c6ff00]" />
    </div>
  );
};

export default Loading;
