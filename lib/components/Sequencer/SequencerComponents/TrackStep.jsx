import React from 'react';

const TrackStep = (props) => {
  // console.log(props)
  return(
    <div className={props.currentStep === props.index ? "single-step current" : "single-step"}>
      <div className={props.step ? 'step-on' : 'step-off'}>hey</div>
    </div>
  )
}

export default TrackStep
