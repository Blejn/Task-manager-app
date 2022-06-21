import './ExpensesFilter.css'
const ExpensesFilter = (props) => {
    const selectHandler=(event)=>{
console.log(event.target.value);
    }
  
    return <div className="filter-expense">

 <div className='expenses-filter__control'>
    <label> Filter by the year</label>
    <select value={props.selected} onChange={selectHandler}>
        <option value="2022"></option> 
        <option value="2021"></option>
        <option value="2020"></option>
        <option value="2019"></option>
    </select>
 </div>

        
    </div>

    
};
export default ExpensesFilter;