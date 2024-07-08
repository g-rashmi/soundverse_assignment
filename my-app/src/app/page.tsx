import ChallengeCard from '@/components/card'
import React from 'react'


function page() {
  return (
    <div className="m-10 text-center w-30">
      <ChallengeCard day={1} goal={3} tokens={4000}/>
    </div>
  )
}

export default page
