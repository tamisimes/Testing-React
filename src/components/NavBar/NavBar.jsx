import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return ( 
        <div> 
        <nav>
        <h1> Kameron </h1>
        <button> Remeras </button>
        <button> Accesorios </button>
        <button> Abrigos </button>
        <button> Pantalones </button> 
        <CartWidget />
        </nav>
        </div>
)
    }
export default NavBar 