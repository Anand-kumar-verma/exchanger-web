import classNames from 'classnames'
import React from 'react'

export default function Label({
    title = "Name",
    isLoading = false,
    className=""
}) {
    return (
        <div className={classNames('text-wrap text-gray-600 text-sm font-normal mb-1', className)}>
            {title} {isLoading && <span className='text-red-600'>*</span>}
        </div>
    )
}
