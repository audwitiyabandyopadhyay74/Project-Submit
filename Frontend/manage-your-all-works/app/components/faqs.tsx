import React from 'react'

const FAQs = () => {
  return (
    <div className='h-[100vh] w-screen flex justify-center items-center gap-10 flex-wrap' id='FAQS'>
        <span className='text-5xl'>FAQs</span>
    <div className="flex flex-col w-max h-max">
        <details className='bg-white  rounded-lg p-4 mb-4 w-120 text-black'>
            <summary className='border-2 w-full  border-white font-bold '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, fugiat?</summary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a distinctio et architecto nostrum reiciendis officiis veniam dolor ratione, inventore nulla facere sit nesciunt nemo beatae accusantium ab ? Ea, cumque!
        </details>
        <details className='bg-white  rounded-lg p-4 mb-4 w-120 text-black'>
            <summary className='border-2 w-full  border-white font-bold '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, fugiat?</summary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a distinctio et architecto nostrum reiciendis officiis veniam dolor ratione, inventore nulla facere sit nesciunt nemo beatae accusantium ab ? Ea, cumque!
        </details>
        <details className='bg-white  rounded-lg p-4 mb-4 w-120 text-black'>
            <summary className='border-2 w-full  border-white font-bold '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, fugiat?</summary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a distinctio et architecto nostrum reiciendis officiis veniam dolor ratione, inventore nulla facere sit nesciunt nemo beatae accusantium ab ? Ea, cumque!
        </details>
    </div>
    </div>
  )
}

export default FAQs