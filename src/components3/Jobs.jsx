import './Jobs.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Jobs (){

    //const jobs = []
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const showJobs = async ()=>{
        try {
            setLoading(true)
            const response = await axios.get('http://localhost:5000/jobs',data)
            console.log(response.data)
            setData(response.data.jobs)
        } catch (error) {
            console.error("Error fetching jobs:", error)
            setError('Something went wrong')
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        showJobs()
    }, [])

    if (loading){ 
        return <div className="jobs-container"><p>Loading jobs...</p></div>
    }

    if (error){ 
        return <div className="jobs-container"><p>Error: {error}</p></div>
    }

    return(
        <div className='jobs-container'>
            <div className='header-search'>
                <h2>All Jobs ({data.length})</h2>
                <select className="sort-by">
                    <option>Popular</option>
                    <option>Latest</option>
                </select>
            </div>
            {data.slice(0, 5).map((job) => (
                    <div key={job._id} className="job-card">
                        <div className="job-header">
                            <h3>
                                {job.title} 
                                <span className="part-time">
                                    {job.type}
                                </span>
                            </h3>
                            <p className='jobs-p'>
                                Salary: {job.min_salary || job.max_salary || 'Negotiable'}
                            </p>
                            <p className='jobs-p'>
                                <strong>{job.location}</strong>
                            </p>
                        </div>
                        <div className="job-footer">
                            <span>+10 applicants</span>
                            <div>
                                <button className="btn-outline">View details</button>
                                <button className="btn-primary">Apply now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Jobs