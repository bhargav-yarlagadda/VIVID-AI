import React from 'react'

const AddTransformations = ({params}:{params:{type:string}}) => {
    const type = params.type
  return (
    <div>AddTransformations {type}</div>
  )
}

export default AddTransformations