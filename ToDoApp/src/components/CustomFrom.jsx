import React from 'react'

const CustomFrom = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className='todo' onSubmit={handleFormSubmit}>

            <div className="wrapper">
                <input type="text" placeholder='Create a new todo...'/>

                <label htmlFor="tasks">Enter Task</label>
            </div>
        </form>
    )
}

export default CustomFrom;
