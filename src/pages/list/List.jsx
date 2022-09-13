import  './list.css'
import { useState } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import {useLocation} from 'react-router-dom'
import { format } from "date-fns";
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [dates, setDates] = useState(location.state.dates)
  // const [adult, setAdult] = useState(location.state.adult)
  // const [children, setChildren] = useState(location.state.children)
  // const [room, setRoom] = useState(location.state.room)
  const [options, setOptions] = useState({
    adult : location.state.adult,
    children : location.state.children,
    room : location.state.room,
    minPrice : 0,
  })
  const handleChange = (e) => {
    setOptions({
      ...options,
      [e.target.name] : Number.parseInt(e.target.value)
    })
    console.log(e.target.value)
  }
  const [openDate, setOpenDate] = useState(false);
  console.log(location.state)
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" value={destination} onChange={(e)=>setDestination(e.target.value)} />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>
              {
                  openDate && 
                  <DateRange
                editableDateInputs={true}
                onChange={item => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                />
                }
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price <small>per night</small></span>
                <input type="number" name="minPrice" id="" className='lsOptionInput' placeholder={options.minPrice} onChange={handleChange} />
              </div>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult <small>per night</small></span>
                <input type="number" name="adult" id="" className='lsOptionInput' placeholder={options.adult} onChange={handleChange} />
              </div>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children <small>per night</small></span>
                <input type="number" name="children" id="" className='lsOptionInput'  placeholder={options.children} onChange={handleChange}/>
              </div>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room <small>per night</small></span>
                <input type="number" name="room" id="" className='lsOptionInput' placeholder={options.room} onChange={handleChange} />
              </div>
            </div>
            <button>
              Search
            </button>
          </div>
          <div className="listResult">dsfdsfdsfdsf</div>
        </div>
      </div>
    </div>
  )
}
