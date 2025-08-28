import React from 'react'

type MinutesProps = {
  Minutes: number; 
};
const MINUTES = ({Minutes}:MinutesProps) => {
  return (
    <div>{`${Minutes.toString().padStart(2,"0")}`}</div>
  )
}

export default MINUTES