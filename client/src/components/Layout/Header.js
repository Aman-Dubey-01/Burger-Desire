import { Fragment, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import { FaHome } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { GrMapLocation } from 'react-icons/gr';
import { UserContext } from '../../store/userContext';
import { toast } from 'react-hot-toast';
import axios from 'axios';


const Header = (props) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const logoutHandler = async () => {
    try {
      const data = await axios.get('/logout');
      if (data.error) {
        toast.error(data.error)
      } else {
        setUser(null);
        toast.success('Logout successful')
        navigate('/')
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Fragment >
      <header className={classes.header}>
        <div className={classes.headlogo} >

          <h2> 🍔 𝕭𝖚𝖗𝖌𝖊𝖗 𝕯𝖊𝖘𝖎𝖗𝖊</h2>
        </div>

        <div className={classes.links} >
          <Link to='/' className={classes.link_icon}> <span><FaHome className={classes.headicon} /></span>  Home</Link>
          <Link to='/Menu' className={classes.link_icon}><span><MdFastfood className={classes.headicon} /></span> Menu</Link>
          <Link to='/' className={classes.link_icon}><span><GrMapLocation className={classes.headicon} /></span> Locate</Link>
          <Link to='/Cart' className={classes.cartbtn} ><HeaderCartButton onClick={props.onShowCart} /></Link>
          {user ?
            <div className={classes.auth_btn} onClick={logoutHandler}>
              <button>Logout</button>
            </div>
            :
            <div className={classes.auth_btn} >
              <Link to='/auth' className={classes.auth_btn} > Login</Link>
            </div>
          }

        </div>
      </header>
    </Fragment>
  );
};

export default Header;
