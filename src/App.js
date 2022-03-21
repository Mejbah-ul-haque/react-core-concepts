import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'sopno' },
  { name: 'shuvro', job: 'pathor' }
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Kuber', 'jashim', 'Ilius', 'Razzak', 'Riyaz']
  return (
    <div className="App">
      {
        nayoks.map(hero => <li>Nayok : {hero}</li>)
      }
      {/* {
        nayoks.map(hero => <Person nayok={hero}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person nayok={nayoks[0]} nayika="kate"></Person>
      <Person nayok={nayoks[1]} nayika="nai"></Person>
      <Person nayok={nayoks[2]} nayika="Kopila"></Person> */}
      <h5>New Component. YAY</h5>
      <p>rock mama React mama.</p>
      <Friend name="Shah Rukh Khan" phone="017777"></Friend>
      <Friend name="Salman Khan" phone="019999"></Friend>
      <Friend name="Aamir Khan" phone="018888"></Friend>
    </div >
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.name}</h3>
      <p>phone : {props.phone}</p>
    </div>
  )
}

export default App;
