
import React from 'react'

const TransformationPage = ({params}:{params:{id:string}}) => {
  const id = params.id
  return (
    <div>
      Transformation Page {id}
    
    </div>
  )
}

export default TransformationPage