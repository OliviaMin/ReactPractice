import React,{useState,useEffect} from 'react'

const initialLocationState = {
    latitude: null,
    longitude: null,
    speed: null
  };

const CounterFunction=()=>{

    const[count, setCount] = useState(0);
    const [isOn,setisOn] =useState(false);
    const [mousePosition, setmousePosition] = useState({x:null,y:null});
    const [status, setStatus] = useState(navigator.onLine);
    const [{ latitude, longitude, speed }, setLocation] = useState(
        initialLocationState
      );
      let mounted = true;

    useEffect(()=>{
        document.title=`You've clicked ${count} !times`;
        window.addEventListener('mousemove',handleMouseMove);
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);
        navigator.geolocation.getCurrentPosition(handleGeolocation);
      const watchId = navigator.geolocation.watchPosition(handleGeolocation);

        return()=>{
            window.removeEventListener('mousemove',handleMouseMove);
            window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);
        navigator.geolocation.clearWatch(watchId);
        mounted = false;

        }
    },[count])

    const increment=()=>{
        // setCount(count+1);
        setCount(prevCount => prevCount+1)
    }

    const isToggle=()=>{
        setisOn(prevState=>!isOn)
    }

    const handleMouseMove=e=>{
        setmousePosition({
            x:e.pageX,
    y:e.pageY})
    }

    const handleOnline =()=>{
        setStatus(true)
    }

    const handleOffline =()=>{
        setStatus(false)
    }

    const handleGeolocation = event => {
        if (mounted) {
          setLocation({
            latitude: event.coords.latitude,
            longitude: event.coords.longitude,
            speed: event.coords.speed
          });
        }
      };
    return(

    <div>
    
    I am Function Component!
    <button onClick={increment}>I was clicked {count} times!</button>
    <div style={{
        height:'50px',
        width:'50px',
        background:isOn?"green":"grey"
    }} onClick={isToggle}> 
    
    </div>
    <h2>Mouse Positions</h2>
    x position: {JSON.stringify(mousePosition,null,2)}<br></br>
    <h2>Network Status</h2>
    You are {status?"Connected":"Disconnected"}<br></br>
    <h2>Geolocation</h2>
      <p>Latitude is {latitude}</p>
      <p>Longitude is {longitude}</p>
      <p>Your speed is {speed ? speed : "0"}</p>
    </div>
    )
}

export default CounterFunction

// ReactDOM.render(<CounterFunction/>,document.getElementById('app'));