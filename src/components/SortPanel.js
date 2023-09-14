import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../styles/SortPanel.css"

function SortPanel() {
  return (
    <div className="sort__panel">
        <hr class="solid"></hr>
        <p>Sort by:</p>
        <div className="drop__down">
        <h1>Top</h1>
        <ArrowDropDownIcon/>
        </div>
        
        </div>
  )
}

export default SortPanel
