import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <ul>
      <li>
        <Link href="/components/monthlyRenewalList">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
  )
}
