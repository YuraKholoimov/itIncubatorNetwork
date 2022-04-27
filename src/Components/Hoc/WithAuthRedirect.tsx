import React, {FC, ReactNode} from "react";
import {MyVerticallyCenteredModal} from "../UI/LoginModal";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

export const WithAuthRedirect: FC = ({children}) => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.authReducer.isAuth)
    const [modalShow, setModalShow] = React.useState(true);

    return (
        <>
            {
                !isAuth
                    ? <MyVerticallyCenteredModal
                        isLogined={isAuth}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    : children
            }
        </>
    )
}

// export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
//     return (props: T) => {
//         const isAuth = useSelector<AppStateType, boolean>(state => state.authReducer.isAuth)
//         const [modalShow, setModalShow] = React.useState(true);
//         return <>
//             {
//                 !isAuth
//                     ? <MyVerticallyCenteredModal
//                         isLogined={isAuth}
//                         show={modalShow}
//                         onHide={() => setModalShow(false)}
//                     />
//                     : <Component />
//             }
//         </>
//     }
// }

// export const WithAuthRedirect = <T extends unknown>(Component: any) => {
//
//     const isAuth = useSelector<AppStateType, boolean>(state => state.authReducer.isAuth)
//     const [modalShow, setModalShow] = React.useState(true);
//
//
//     return (props: T) => {
//
//         if(!isAuth) {
//             return <MyVerticallyCenteredModal
//                 isLogined={isAuth}
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         }
//
//         return <Component {...props  as T}/>
//     }
// }