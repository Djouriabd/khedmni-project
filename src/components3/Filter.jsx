import './Filter.css'

function Filter(){

    return(
        <div class="job-container">
            <div class="filter">
                <h2>Filter by:</h2>
                <label className='one'>Salary Range:
                <input className='inputRange' type="text" placeholder="Min"/>
                <input className='inputRange' type="text" placeholder="Max"/>
                </label>
            <hr/><br/>
                <label><h2>Job Type:</h2>
                <label className="checkbox-label">
                <input type="checkbox"/>All
                </label>          
                <label className="checkbox-label">
                <input type="checkbox"/>Full time
                </label>
                <label className="checkbox-label">
                <input type="checkbox"/>Part time
                </label>
                <label className="checkbox-label">
                <input type="checkbox"/>Internship
                </label>
                <label className="checkbox-label">
                <input type="checkbox"/>Contract
                </label>
                </label>
            <hr/><br/>
                <label><h2>Work Mode:</h2>
                <label className="checkbox-label">
                <input type="checkbox"/>All
                </label>          
                <label className="checkbox-label">
                <input type="checkbox"/>Remote
                </label>
                <label className="checkbox-label">
                <input type="checkbox"/>Hybrid
                </label>
                <label className="checkbox-label">
                <input type="checkbox"/>On-Site
                </label>
                </label>
            <hr/><br/>
                <label><h2>Experience Level:</h2>
                <label className="checkbox-label">
                <input type="checkbox"/>All
                </label>  
                <label className="checkbox-label">       
                <input type="checkbox"/>Junior  
                </label>
                <label className="checkbox-label">
                <input type="checkbox"/>Mid level
                </label>
                <label className="checkbox-label">
                <input type="checkbox"/>Senior
                </label>
                </label>
            <hr/><br/>
                <label><h2>Job Functions:</h2>
                    <label className="checkbox-label">
                    <input type="checkbox"/>All
                    </label>         
                    <label className="checkbox-label">   
                    <input type="checkbox"/>IT 
                    </label>
                    <label className="checkbox-label">
                    <input type="checkbox"/>Marketing
                    </label>
                    <label className="checkbox-label">
                    <input type="checkbox"/>Finance
                    </label>
                </label>
            </div>
        </div>        
    )
}

export default Filter