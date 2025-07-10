import './Search.css'


function Search(){

    return(
        <div className='search-container'>
            <h1>FIND YOUR DREAM JOB</h1>
            <p>Find your next career at companies like Ooredoo, Djezzy, and yassir</p>
            <form className='search-bar'>
                <input className='se' type="text" placeholder='Job title or keyboard' />
                <input className='se' type="text" placeholder='Tipaza, Bousmail' />
                <button className='btn2'>Search</button>
            </form>
        </div>
    )
}

export default Search