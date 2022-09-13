import React from 'react'
import './featured.css'

export const Featured = () => {
  return (
    <div className='featured'>
      <div className="featureditem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/656620.webp?k=759f0fcc34720a7f7fdbb774e9968e47b8400f36397461d6b580c93cb93560b5&o=" alt="" className="featuredImg" />
        <div className="feturedTitles">
          <h1>Concepción</h1>
          <p>123 properties</p>
        </div>
      </div>
      <div className="featureditem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/948748.webp?k=248eec3648c570c84bb7375062cc2bb984a7ab402c342a1716bdf9754903be93&o=" alt="" className="featuredImg" />
        <div className="feturedTitles">
          <h1>Georgetown</h1>
          <p>123 properties</p>
        </div>
      </div>
      <div className="featureditem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/653308.webp?k=240cda9faac608a7810f5ac54683eb289c82594551fc3cd3e3fea6a0ed81e61f&o=" alt="" className="featuredImg" />
        <div className="feturedTitles">
          <h1>Barranquilla</h1>
          <p>123 properties</p>
        </div>
      </div>
    </div>
  )
}
