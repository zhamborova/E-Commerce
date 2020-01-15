import React from 'react';
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/071 crown.svg';
import {Link} from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';



const Header = ({currentUser}) => {
 return(
     <div className='header'>
         <Link to='/' className='logo-container'>
         <Logo className='logo'/>
         </Link>
         <div className='options'>
             <Link to='/shop' className='option'>SHOP</Link>
             <Link to='/contact' className='option'>CONTACT</Link>
             {currentUser ?
             <div className='option' onClick={() => {auth.signOut()}}> SIGN OUT</div>
             :
                 <Link to='/signin' className='option'>SIGN IN</Link>
             }



         </div>
     </div>
 )

};

const mapStateToProps = state => ({currentUser:state.user.currentUser});
export default connect(mapStateToProps)(Header);
