import logo from '../img/uang.png';
import { Link } from 'react-router-dom';
export default function NavbarFunc() {
  const content = ['contact', 'about', 'home'];
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F6F7C1', padding: '1rem 0px', textTransform: 'uppercase', alignItems: 'center' }}>
        <div style={{ margin: '0px 20px' }}>
          <img style={{ height: '2rem' }} src={logo} alt="logo" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>
          {content.map((data, index) => (
            <>
              <Link to={'/'} style={{ margin: '0px 10px', color: 'black', textDecoration: 'none' }} key={index}>
                {data}
              </Link>
            </>
          ))}
        </div>
        <div style={{ margin: '0px 20px' }}>
          <input className="input" style={{ backgroundColor: '#c1aefc' }} placeholder="search" type="search" />
        </div>
      </div>
      {/* <div style={{ height: '100rem' }}></div> */}
    </>
  );
}
