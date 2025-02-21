import React, { useState,useEffect } from "react";
import getTrendTerms from "../../services/getTrends";
import Category from "../Category";


export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendTerms().then(setTrends)  
  }, [])
  
  return <Category name='Ultimas tendencias' options={trends} />   
}