import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useAction} from '../hooks/useAction';
import {useTypedSelector} from '../hooks/useTypedSelector';


const RepositoriesList:React.FC = ()=>{
  const [term,setTerm] = useState('');
  const { SearchRepositories } = useAction();
  const {data,loading,error} = useTypedSelector((state)=> state.repositories);

  const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    SearchRepositories(term);
  }
return (
  <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e=>setTerm(e.target.value)} />
      <button>Search</button>
    </form>
    {error && <h3> {error} </h3>}
    {loading && <h3> Loading ...</h3>}
    {!error && !loading &&
     data.map((name)=> <div key={name}> {name}</div>
    ) }
  </div>
)
}

export default RepositoriesList;