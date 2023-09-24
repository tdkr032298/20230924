import React from 'react'

const ListJudgementBtn = () => {
  return (
    <>
        <div className="indicator">
            <span className="indicator-item badge badge-secondary bg-accent font-bold text-white">2</span> 
            <button className='btn btn-sm btn-outline w-36 my-0 text-info'>
                1次判定待ち
            </button>
        </div>
    </>
  )
}

export default ListJudgementBtn