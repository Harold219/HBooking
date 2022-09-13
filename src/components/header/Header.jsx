import React, { useState } from 'react';
import { faBed, faCalendarDays, faCar, faPercent, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { DateRange } from 'react-date-range';
import { format } from "date-fns";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';

export const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  // const [options, setOptions] = useState({
  //   adult:1,
  //   children:0,
  //   room:1

  // })

  const [destination, setDestination] = useState("")

  const [adult, setAdult] = useState(1)
  const [children, setChildren] = useState(0)
  const [room, setRoom] = useState(1)
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const navigate = useNavigate()

  const handleSearch = () =>{
    navigate("/hotels",{state:{destination, dates, adult, children, room}})
  }
  
  
  return (
    <div className='header'>
        <div className={type!=="list"?"headerContainer":"listMode"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Fligths</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            { type !== "list" &&
              <><h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free HaroldBooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>

            <div className="headerSearch">

              <div className="headerSearchItem">
                <FontAwesomeIcon className='headerIcon' icon={faBed}/>
                <input type="text" placeholder='Where are you going?' className='headerSearchInput' onChange={(e) => setDestination(e.target.value)}/>
              </div>

              <div className="headerSearchItem">

                <FontAwesomeIcon className='headerIcon' icon={faCalendarDays}/>
                <span className="headerSearchText" onClick={()=>{setOpenDate(!openDate);setOpenOptions(false)}}>
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`}
                </span>
                {
                  openDate && 
                  <DateRange
                editableDateInputs={true}
                onChange={item => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="date"
                />
                }
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon className='headerIcon' icon={faPerson}/>
                <span className="headerSearchText" onClick={()=>{setOpenOptions(!openOptions);setOpenDate(false)()}}>{adult} adult {children} children {room} room</span>
                {
                  openOptions && 
                  <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="itemControl">
                      <button className="optionCounterButton" disabled={adult<2} onClick={()=>setAdult(adult-1)}>-</button>
                      <span className="optionCounterNumber">{adult}</span>
                      <button className="optionCounterButton" onClick={()=>setAdult(adult+1)}>+</button> 
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="itemControl">
                      <button className="optionCounterButton" disabled={children<1} onClick={()=>setChildren(children-1)}>-</button>
                      <span className="optionCounterNumber">{children}</span>
                      <button className="optionCounterButton" onClick={()=>setChildren(children+1)}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="itemControl">
                    <button className="optionCounterButton" disabled={room<2} onClick={()=>setRoom(room-1)}>-</button>
                    <span className="optionCounterNumber">{room}</span>
                    <button className="optionCounterButton" onClick={()=>setRoom(room+1)}>+</button>
                    </div>
                  </div>
                </div>
                }
              </div>
              <div className="headerSearchItem">
                <button className="headerButton" onClick={handleSearch}>Search</button>
              </div>
            </div></>}
        </div>
    </div>
  )
}
