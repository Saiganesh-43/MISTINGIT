import React from 'react'
const options = [28, 30, 32, 34, 36];
export const ProCard = () => {
    return (
        <div>
            <div className="card border-primary mb-3 mt-3" style={{ "max-width": "18rem" }}>
                <img src="..." className='card-img-top' alt="..." />
                <div className="card-body text-primary">
                    <h5 className="card-title">Primary card title</h5>
                    <p className="card-text">Some quick example text.</p>
                    <div className='container w-100'>
                        <select name="" id="" className='border-primary w-50 rounded' style={{ "outline": "none" }}  >
                            {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
