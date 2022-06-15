import Expenses from "./components/Expenses/Expenses";


const App= () =>{
  const expenses=[
    {id:'e1',
    title:'Car Insurance',
    amount:294.67,
    date: new Date(2022,5,17)},

    {id:'e2',
    title:'Toilet Paper',
    amount:34.67,
    date: new Date(2022,5,17)},
    
    {id:'e3',
    title:'Console',
    amount:300.67,
    date: new Date(2022,5,17)},
  
  ];

  
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <Expenses items= {expenses}/>

    </div>
  );
}

export default App;
