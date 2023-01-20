import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter();

  // React.useEffect(() => {
  //   router.push("/components/monthlyRenewalList");
  // });

  return (
    <ul>
      <li>
        <Link href="/components/monthlyRenewalList">monthlyRenewalLis</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
  );
}
