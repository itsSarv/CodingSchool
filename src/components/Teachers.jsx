import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const teachers =
 [
  {
    img: './teachers/a.jpg',
    name: 'James Bond',
    qua : 'Btech Kohalpur (MIT)'
  },
  {
    img: './teachers/b.jpg',
    name: 'Jacy Chan',
    qua : 'Mtech Delhi (BIT)'
  },
  {
    img: './teachers/c.jpg',
    name: 'King Cobra',
    qua : 'Machat Chusat (BIT)'
  },
  {
    img: './teachers/d.jpg',
    name: 'Computer Lady',
    qua : 'ComputerMasters (Jharkhand)'
  },
  {
    img: './teachers/e.jpg',
    name: 'jacy chan bond',
    qua : 'Mtech Delhi (BIT)'
  },
  {
    img: './teachers/f.jpg',
    name: 'jacy chan bond',
    qua : 'Mtech Delhi (BIT)'
  },
  {
    img: './teachers/g.jpg',
    name: 'jacy chan bond',
    qua : 'Mtech Delhi (BIT)'
  },
  {
    img: './teachers/h.jpg',
    name: 'jacy chan bond',
    qua : 'Mtech Delhi (BIT)'
  },
  {
    img: './teachers/i.jpg',
    name: 'jacy chan bond',
    qua : 'Mtech Delhi (BIT)'
  },
  {
    img: './teachers/j.jpg',
    name: 'jacy chan bond',
    qua : 'Mtech Delhi (BIT)'
  },
  {
    img: './teachers/k.jpg',
    name: 'jacy chan bond',
    qua : 'Mtech Delhi (BIT)'
  },
  {
    img: './teachers/l.jpg',
    name: 'jacy chan bond',
    qua : 'Mtech Delhi (BIT)'
  }
  ,
  {
    img: './teachers/l.jpg',
    name: 'jacy chan bond',
    qua : 'Mtech Delhi (BIT)'
  }
 ]


const Teachers = () => {
  return (
    <div>
        <Nav/>
        
        <header style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          backgroundImage: ' linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '64px 32px',
          color:'white'
        }}>
        
        <h1>
        <i className="ri-user-voice-line" style={{marginRight:10}}></i>
          Teachers
          </h1>
        </header>

        <section style={{
          width: '90%',
          display:'flex',
          justifyContent: 'space-between',
          rowGap: 40,
          columnGap: 10,
          margin: '0 auto',
          padding:'80px 0px',
          flexWrap:'wrap'
        }}>

        {teachers.map((prop, index)=>{
          return(
            <div style={{width: '22%'}} key={index}>
            <img src={prop.img} alt='Teachers' width='100%'/> 
            <h3 style={{marginBottom: 2, padding:0}}>{prop.name}</h3>
            <p  style={{margin: 0, padding:0}}> {prop.qua}</p>
          </div>
          )
        })}   
    
        </section>

        <Footer/>
    </div>
  ) 
}

export default Teachers