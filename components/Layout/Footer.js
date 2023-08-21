import Link from "next/link";
import React from "react";

export default function () {
  return (
    <div className="text-xs">
      <p>
        Copyright © 2023{" "}
        <Link
          href="https://klajdimurataj.vercel.app"
          target="_blank"
          className="hover:underline"
        >
          {" "}
          Klajdi Murataj
        </Link>{" "}
        <br /> All rights reserved.
      </p>
    </div>
  );
}
