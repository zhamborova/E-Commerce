import React from 'react';
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/071 crown.svg';
import {Link} from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";

import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
const Header = ({currentUser, hidden}) => {
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
       <CartIcon/>
         </div>
         {hidden ? null : <CartDropDown/>}
     </div>
 )

};

const mapStateToProps = createStructuredSelector ({
     currentUser: selectCurrentUser,
     hidden: selectCartHidden
    });

export default connect(mapStateToProps)(Header);
