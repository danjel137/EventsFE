import {Form, Link, NavLink} from "react-router-dom";
import {getAuthToken} from "../../util/util";
import {useContext} from "react";
import DataAdminContext from "../../store/DataAdminContext";
import HeaderProfile from "./header/HeaderProfile";
import PortalExample from "./AddPhoto";
import "./PhotoNavigation.css"
function PhotosNavigation() {
    //
    // return (
    //
    //             <ul className={classes.list}>
    //                 <li>
    //                     {/*<NavLink*/}
    //                     {/*    to="editProfile"*/}
    //                     {/*    className={({isActive}) =>*/}
    //                     {/*     isActive ? classes.active : undefined*/}
    //                     {/*    }*/}
    //                     {/*>*/}
    //                     {/*    Edit Profile*/}
    //                     {/*</NavLink>*/}
    //                     <PortalExample/>
    //                 </li>
    //                 <li>
    //                     {/*<NavLink*/}
    //                     {/*    to="new"*/}
    //                     {/*    className={({isActive}) =>*/}
    //                     {/*        isActive ? classes.active : undefined*/}
    //                     {/*    }*/}
    //                     {/*>*/}
    //                     {/*    Add Photo*/}
    //                     {/*</NavLink>*/}
    //                     <PortalExample/>
    //                 </li>
    //             </ul>
    //
    // );



}

export default PhotosNavigation;


//
// import classes from './PhotosNavigation.module.css';
// import {Form, Link, NavLink} from "react-router-dom";
// import {getAuthToken} from "../../util/util";
// import {useContext, useState} from "react";
// import DataAdminContext from "../../store/DataAdminContext";
// import HeaderProfile from "./header/HeaderProfile";
// import PhotosForm from "./PhotosForm";
//
// function PhotosNavigation() {
//     const [closeOpenFormForAddPhoto, setCloseOpenFormForAddPhoto] = useState(false);
//
//     function handleClickButton() {
//         setCloseOpenFormForAddPhoto(true)
//     }
//
//
//     return (
//         <>
//
//             <ul className={classes.list}>
//                 <li>
//                     <NavLink
//                         to="editProfile"
//                         className={({isActive}) =>
//                             isActive ? classes.active : undefined
//                         }
//                     >
//                         Edit Profile
//                     </NavLink>
//                 </li>
//                 <li>
//                     <button onClick={handleClickButton}
//                         // to="new"
//                             className={({isActive}) =>
//                                 isActive ? classes.active : undefined
//                             }
//                     >
//                         Add Photo
//                     </button>
//                 </li>
//             </ul>
//             {
//                 closeOpenFormForAddPhoto && <PhotosForm closeOpenForm={setCloseOpenFormForAddPhoto}/>
//             }
//         </>
//     )
//         ;
// }
// function redirectPage() {
//     props.closeOpenForm(false)
//     window.location.href = 'http://localhost:3000/photos';
//
// }
//
// export default PhotosNavigation;