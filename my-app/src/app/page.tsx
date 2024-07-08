import ChallengeCard from '@/components/card'
import React from 'react'

import { Suspense } from 'react'

function page() {
  return (
    <Suspense><div className="m-10 text-center w-30">

    <div>  <ChallengeCard/></div>

   
    </div></Suspense>
  )
}

export default page
