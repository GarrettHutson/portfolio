


import React from 'react'
import Climbcards from '../components/Climbcards'
import {getClimbs} from '@/sanity/sanity-utils'


async function Climb() {
    const climbPosts = await getClimbs()
  
  if(climbPosts.length === 0) return <h1>No Climbs</h1> 
  return (
<div className=''>

<div className='pt-24'>


    <Climbcards climbPosts={climbPosts}/>

</div>
</div>
)}

export default Climb