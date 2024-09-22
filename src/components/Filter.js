import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory= props.setCategory;
  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className='filter'>
    {
      filterData.map( (data) => (

        <button 
        className="ui-btn"
        key={data.id} 
        onClick={()=>filterHandler(data.title)}
        >
          <span>
          {data.title}
          </span>
            
        </button>
        ))
    
    }
    </div>
  )
}

export default Filter