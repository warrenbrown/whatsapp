import React from 'react'

const SouthwestHeader = () => {
    return (
        <div>
            <div className=' flex h-16 bg-[#304cb2] justify-between items-center'>
                <h1 className='text-white'>Menu Icon</h1>
                <div className='text-white'>SouthWest Logo</div>
                <div> </div>
            </div>
            <div className='grid grid-cols-6 h-16 bg-[#1a2c80] text-white items-center'>
                <div className='grid grid-cols-2 justify-end border-r'>
                    <div className='flex justify-end'>Icon</div>
                    <div>
                        <div>21 lorem ipsum</div>
                        <div>lorem ipsum 2</div>
                    </div>
                </div>
                <div className='flex-row col-span-3 px-4 border-r'>
                    <div className=' h-[2px] bg-white' />
                    <div>Icon</div>
                </div>
                <div>3</div>
                <div>4</div>
            </div>
        </div>
    )
}

export default SouthwestHeader