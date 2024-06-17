import React from 'react'
import Nav from './Nav'
import Footer from './Footer'


const Holidays = () => {
  const holidays = [
    {
      title: 'Summer Vaccation',
      duration: '1 Months',
      date: ' 10-04-2024'
    },
    {
      title: 'Summer Vaccation',
      duration: '1 Months',
      date: ' 10-04-2024'
    },
    {
      title: 'Summer Vaccation',
      duration: '1 Months',
      date: ' 10-04-2024'
    },
    {
      title: 'Summer Vaccation',
      duration: '1 Months',
      date: ' 10-04-2024'
    },
    {
      title: 'Summer Vaccation',
      duration: '1 Months',
      date: ' 10-04-2024'
    },
  ]
  return (
    <div>
     <Nav/>
     <div style={{
      width: '60%',
      margin: '0 auto',
      padding: '60px 0'

     }}>
     <h1 style={{
      textAlign:'center',
      marginBottom: '40px'
     }}>Your Holidays</h1>

     <table width='100%'>
      <thead>
        <tr style={{
          background: '#ddd',
          border: '1px solid #ccc'
        }}>
          <th style={{padding:14}}>S.N</th>
          <th>Title</th>
          <th>Duration</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {
          holidays.map((item, index)=>{
            return(
              <tr style={{textAlign:'center'}}>
                <td style={{padding:14, borderBottom: '1px solid #ddd'}}>
                  {index+1}
                </td>
                <td style={{padding:14, borderBottom: '1px solid #ddd'}}>
                  {item.title}
                </td>
                <td style={{padding:14, borderBottom: '1px solid #ddd'}}>
                  {item.duration}
                </td>
                <td style={{padding:14, borderBottom: '1px solid #ddd'}}>
                  {item.date}
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>

     </div>
     <Footer/>
    </div>
  )
}

export default Holidays