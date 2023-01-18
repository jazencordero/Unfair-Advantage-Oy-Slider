import React, {useState} from 'react'
import './App.css';
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


function valuetext(value) {
  return `${value}°C`;
}

const App = () => {

  const [value, setValue] = React.useState([6,24]);

  const [tf, setTf] = useState(false)

  const toggleDisabled = () => {
    if (tf === false){
      setTf(true)
    } else {
      setTf(false)
    }
  }

  const [event, setNewEvent] = useState({inner:""})

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  const [isShown, setIsShown] = useState(false)

  function onHover(e){
    setIsShown(true)
    console.log(event.inner)

  }


  return (
    <div>
      <h2>Add new Event</h2>
      <div>
        <TextField placeholder="Add Event" id="outlined-basic" label="Event" 
        variant="outlined" 
          value={event.inner} 
          onChange={(e) => setNewEvent({inner:e.target.value})}
        />
        <Button onClick={onHover} variant="contained">Add</Button>
      </div>
      <div>
        <button onClick={toggleDisabled}>Free/NotFree</button>
      </div>
      <Slider
        getAriaLabel={() => 'Free day slider'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={6}
        max={24}
        marks={true}
        getAriaValueText={valuetext}
        disabled={tf}
        onMouseEnter={()=> onHover()}
        onMouseLeave={()=>setIsShown(false)}
      />
      {isShown && (
        <div>
          {event.inner}
        </div>
      )}
    </div>  
  )
}

//1. Create a slider from 6-24
//2. Create a button that disables or enables a slider
//3. Create a textbox for the event
//4. When you hover over the slider the event appears


export default App;
