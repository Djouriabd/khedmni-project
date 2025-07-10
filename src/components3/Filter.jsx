import './Filter.css'

function Filter(){

    return(
        <div class="job-container">
            <div class="filter">
                <h2>Filter by:</h2>
                <label className="one">Salary Range:</label><br/>
                <input type="text" placeholder="Min"/><br/>
                <br/><input type="text" placeholder="Max"/><br/><br/>
            <hr/><br/>
                <label class="one" for="job-type">Job Type:</label>
                <br/><input type="checkbox" name="all" id="all" value="all"/>
                <label for="all">All</label><br/><br/>             
                <input type="checkbox" name="full-time" id="full-time"/>
                <label for="full-time">full time</label><br/><br/>
                <input type="checkbox" name="part-time" id="part-time"/>
                <label for="part-time">part time</label><br/><br/>
                <input type="checkbox" name="internship" id="internship"/>
                <label for="internship">internship</label><br/><br/>
                <input type="checkbox" name="contract" id="contract"/>
                <label for="contract">contract</label><br/><br/>
            <hr/><br/>
                <label class="one" for="work-mode">Work Mode:</label>
                <br/><input type="checkbox" name="all" id="all" value="all"/>
                <label for="all">All</label><br/><br/>             
                <input type="checkbox" name="remote" id="remote" value="remote"/>
                <label for="remote">Remote</label><br/><br/>
                <input type="checkbox" name="hybrid" id="hybrid" value="hybrid"/>
                <label for="hybrid">Hybrid</label><br/><br/>
                <input type="checkbox" name="on-site" id="on-site" value="on-site"/>
                <label for="on-site">On-Site</label><br/><br/>
            <hr/><br/>
                <label class="one" for="experience-level">Experience Level:</label>
                    <br/><input type="checkbox" name="all" id="all" value="all"/>
                    <label for="all">All</label><br/><br/>             
                    <input type="checkbox" name="junior" id="junior" value="junior"/>
                    <label for="junior">junior</label><br/><br/>
                    <input type="checkbox" name="mid-level" id="mid-level" value="mid-level"/>
                    <label for="mid-level">mid level</label><br/><br/>
                    <input type="checkbox" name="senior" id="senior" value="senior"/>
                    <label for="senior">senior</label><br/><br/>
            <hr/><br/>
                <label class="one" for="job-funtions">Job Functions:</label>
                    <br/><input type="checkbox" name="all" id="all" value="all"/>
                    <label for="all">All</label><br/><br/>             
                    <input type="checkbox" name="it" id="it" value="it"/>
                    <label for="it">IT</label><br/><br/>
                    <input type="checkbox" name="marketing" id="marketing" value="marketing"/>
                    <label for="marketing">Marketing</label><br/><br/>
                    <input type="checkbox" name="finance" id="finance" value="finance"/>
                    <label for="finance">Finance</label><br/><br/>
            </div>
        </div>        
    )
}

export default Filter