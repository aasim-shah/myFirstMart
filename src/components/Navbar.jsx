import {Link} from "react-router-dom"
function Navbar() {
  const toggleSearch = ()=>{
   let searchBarPhone =  document.getElementById('searchBarPhone')
   let searchIconPhone =  document.getElementById('searchIconPhone')
   searchBarPhone.style.display == "none" ?  searchBarPhone.style.display="block" :  searchBarPhone.style.display="none" ;


  }
  return (
    <>
    <div className="black-strap">Limited Stocks remaining. Shop Now
    </div>
    <div className="nav py-3 px-6">
    <div><Link to="/"> LOGO</Link></div>
    <div className="search-bar hidden md:block">
      <input type="text" name="" placeholder='Seach Store' className='search-input' id="" />
      <div className='search-btn'><i className=" text-xl  fa-solid fa-magnifying-glass"></i></div>
    </div>

    <div className="menu">
        <ul className="menu-list">
            <li onClick={toggleSearch} id="searchIconPhone" className="list-item text-[2rem] block md:hidden"><i className="fa-solid fa-search"></i></li>
            <li className="list-item text-[2rem]"><Link to={'/login'}><i className="fa-solid fa-user"></i></Link></li>
            <li className="list-item text-[2rem] cart-li">
              <span className="cart-count">0</span>
              <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
              </li>
            
        </ul>
    </div>
</div>
<div className="onPhone  my-2 hidden md:hidden" id="searchBarPhone">
  <input type="text" name="search" className="w-11/12 block rounded-md mx-auto border border-gray-400 py-1 px-2 " placeholder="Search store" id="" />
</div>
     </>
  )
}

export default Navbar