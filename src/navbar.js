

function Navbar(){
    return(
        <div className="navbar">
        <div className="navbar__s1">
            <h1 className="navbar__s1__title">Udemy</h1>
        </div>
        <div className="navbar__s2"><i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="search here"/>
        </div>
        <div className="navbar__s3">
            <p>courses</p>
           
             <div className="mylearning">
                <p>My learning</p>
                <div className="mylearning__offer">
                    <p>You did not purchase anything yet</p>
                </div>
                <div className="navbar__s4">
                    <i className="fa-solid fa-bars"></i>
                </div>
             </div>                  
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bell" ></i>
            <i class="fa-solid fa-user" ></i>

        </div>
    </div>
    )

}


export default Navbar