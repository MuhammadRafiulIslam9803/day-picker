import './App.css';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { format } from 'date-fns';

function App() {
  const [select, setSelect] = useState(new Date()); // corrected variable name

  return (
    <div>
      <h1>here the time</h1>
      <DayPicker
        mode='single'
        selected={select}
        onSelect={setSelect} // corrected setter function name
      />
      <p className='text-center text-secondary font-bold'>Available Appointments on {format(select, 'PP')}</p>
    </div>
  );
}

export default App;
