import React from 'react';
import './SalesState.css'

const SalesState = () => {

  const ListItems = () => {
    return (
      <div className='table'>
        <div className='table-container'>
          <div>
          <h1>Sales By State</h1>
          </div>
     
         <table>
          <thead>
           
            <tr className='table-heading'>
              <th>State</th>
              <th>Sales</th>
              <th>Value</th>
              <th>Bounce Percentage</th>
            </tr>
            <tr className='table-column'>
             
              <td>AndhraPradesh</td>
              <td>120</td>
              <td>20000</td>
              <td>20</td>
             
            </tr>
            <tr className='table-column'>
              <td>Karnataka</td>
              <td>150</td>
              <td>30000</td>
              <td>28</td>
            </tr>
            <tr className='table-column'>
              <td>Bihar</td>
              <td>300</td>
              <td>120000</td>
              <td>28</td>
            </tr>
            <tr className='table-column'>
              <td>Odisha</td>
              <td>300</td>
              <td>120000</td>
              <td>28</td>
            </tr>
          </thead>
         </table>
         
        </div>
        </div>

        
    );
};

const TopSalesArea = () => {
  return (
    <div>
      <div className='top-sales-container'>
        <h1>Top Sales By State</h1>
        <table>
          <thead>
            <tr>
              <th>Rank </th>
             
              <th>State</th>
              <th>Sales Amount</th>
            </tr>
            <tr className='table-column'>
              <td>1</td>
              <td>Bihar</td>
              <td>4204525</td>
            </tr>
            <tr  className='table-column'>
              <td>2</td>
              <td>Odisha</td>
              <td>3642250</td>
            </tr>
            <tr  className='table-column'>
              <td>3</td>
              <td>Karnataka</td>
              <td>2522345</td>
            </tr>
            <tr className='table-column'>
            <td>4</td>
            <td>Andhra Pradesh</td>
            <td>1110116</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

  return (
    <div>
      <div className='main-container'>
      <ListItems/>
      <TopSalesArea/>
      </div>
     
    </div>
  )
}





export default SalesState;
