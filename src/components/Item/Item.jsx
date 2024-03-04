import '../Item/Item.css'

const Item =({id, nombre, precio, img, categoria, stock, descrpcion})=>{
    return (
        <article className="CardItem card">
            
            <header className="Header">
                <h4 className="ItemHeader">
                    {nombre} </h4>
                </header> 
                <picture>
                    <img src={img} alt= {nombre} className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">
                        Precio: ${precio}
                    </p>
                    <p className="Info">
                        Stock Disponible: {stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                    <button className="Option"> Ver detalle</button>
                </footer>

        </article>
    )
}

export default Item