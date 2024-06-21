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
     <div>
     <header style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          backgroundImage: ' linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '64px 32px',
          color:'white'
        }}>
        
        <h1 className='text-4xl font-bold animate__animated animate__pulse'>
        <i className="ri-emotion-happy-line" style={{marginRight:10}}></i>
          Holidays
          </h1>
        </header>
     <div style={{
      width: '60%',
      margin: '0 auto',
      padding: '60px 0'

     }}>
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
     </div>
    
     <Footer/>
    </div>
  )
}

export default Holidays