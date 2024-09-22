import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import {apiUrl,filterData} from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
const App = () => {

  const [courses,setCourses] = useState('');
  const [loading,setLoading] =useState(true);
  const [category,setCategory] = useState(filterData[0].title);
  useEffect( () =>{
    const fetchData = async() =>{
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        //save data into a variable
        console.log(data);
        setCourses(data.data);
      }
      catch(error){
        toast.error("Something went wrong")
      }
      setLoading(false);
    }
    fetchData();
  },[])


  return ( <div className="app">
    <Navbar/>
    <Filter 
      filterData={filterData}
       category={category} 
       setCategory={setCategory}
    />
    <div> {loading ? (<Spinner/>) : (<Cards 
      courses = {courses} category={category}
    />)}</div>
    
  </div>
  );
};

export default App;
