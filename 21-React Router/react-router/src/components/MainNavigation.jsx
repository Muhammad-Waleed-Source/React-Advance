import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// import { NavLink } from 'react-router-dom';

// import classes from './MainNavigation.module.css';
// import NewsletterSignup from './NewsletterSignup';

// function MainNavigation() {
//   return (
//     <header className={classes.header}>
//       <nav>
//         <ul className={classes.list}>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? classes.active : undefined
//               }
//               end
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/events"
//               className={({ isActive }) =>
//                 isActive ? classes.active : undefined
//               }
//             >
//               Events
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/newsletter"
//               className={({ isActive }) =>
//                 isActive ? classes.active : undefined
//               }
//             >
//               Newsletter
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//       <NewsletterSignup />
//     </header>
//   );
// }

// export default MainNavigation;
