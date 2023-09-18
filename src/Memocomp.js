import React from 'react'

function Memocomp({name}) {
    console.log('rendering memo component')
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(Memocomp)