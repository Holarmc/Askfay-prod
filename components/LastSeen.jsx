"use client";
import ReactTimeAgo from "react-time-ago";

export default function LastSeen({ date }) {
  return (
    <div className="mb-2 mt-2 text-sm text-gray-500">
      <ReactTimeAgo date={date} locale="en-US" timeStyle="twitter" />
    </div>
  );
}
