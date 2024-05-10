import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <div>About page</div>
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
}

export default page;
