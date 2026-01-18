
export  function Gallery(props){

    const {imagenes}=props;
    let arrayImagenes=[];
    return(
        <>
            <div className="container-gallery">
                <h1>My Gallery</h1>
                <div className="container-img">
                    {
                        arrayImagenes=imagenes.map((imagen,index)=>(
                            
                                <img src={imagen.ruta} alt={`imagen ${imagen.name}`} loading="lazy" srcSet={`${imagen.ruta} 1x, /img/houseposter.webp 2x, /img/shadowandbone.webp 3x`}  key={index}/>
                        
                        ))
                    }
                </div>
            </div>
        </>
    )
}