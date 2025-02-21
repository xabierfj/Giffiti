import { useEffect, useState } from "react"
import getGifs from "../services/getGifs"


export function useGifs({ keyword } = { keyword: null}) {
    //useState devuelve un array de 2 posiciones
    const [gifs, setGifs] = useState([]) 
    const [loading, setLoading] = useState(false)
      
    /* IMPORTANTE
     * Se ejecuta cada vez que se renderiza el componente
     * Recive dos parametros, uno de ellos es un array de dependencias, si se pone un array vacio solo se ejecutaria una vez
     * Si no se pone dependencias y tenermos algo que vuelva a renderizar la pagina entraria en un loop
     */ 
    useEffect(function () {
        setLoading(true)
        // Recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // Guardamos la keyword del localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword]) 

    return {loading, gifs}
}

    