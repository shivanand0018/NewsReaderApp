
import { useEffect, useState } from 'react';
import './App.css';
import Headlines from './Headlines';
import MainContent from './MainContent';
import NavBar from './NavBar';

function App() {
  const [content, setContent] = useState(null)
  const [dataFetched,setDataFetched]=useState(true)

  useEffect(() => {
    console.log(fetchAPI());
  }, [])

  const fetchAPI=async()=>{
    const data=await (await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=36794892e1094ec79769ecd5c8f452ee")).json();
    
      setContent(data);
      setDataFetched(false);
  }

  console.log(content);

  return (
    <div className="App">
      <NavBar />
      {content && <Headlines Content={content}/>}
      {content && <MainContent Content={content}/>}
    </div>
  );
}

export default App;
