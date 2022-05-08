import Child from './Child'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios'
function App() {

  useEffect(() => {
    axios.get("/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4").then(res => {
      console.log(res.data);
    })
  }, [])
  return <div>
    apppp
    <ul>
      <li>1111</li>
      <li>2222</li>
    </ul>
    <Child />
  </div>
}
export default App;
