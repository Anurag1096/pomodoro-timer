import React from 'react'

type SecondsProps = {
  Seconds: number; 
};
const SECONDS = ({Seconds}:SecondsProps) => {
  return (
    <div>{`${Seconds.toString().padStart(2,"0")}`}</div>
  )
}

export default SECONDS