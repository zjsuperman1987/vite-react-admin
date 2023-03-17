import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "@/store";

interface Props {
    children: JSX.Element;
}


export function AuthNoLogin(props: Props) {
    const userinfo = useSelector((state: RootState) => state.app.userinfo);

    if (!userinfo.userBasicInfo) {
        console.log('userinfo', userinfo)   
        return <Navigate to="/user/login" replace />;
    }

    return props.children
}


export function AuthWithLogin(props: Props) {
    const userinfo = useSelector((state: RootState) => state.app.userinfo);

    if (userinfo.userBasicInfo) {
        return <Navigate to="/home" replace />;
    }

    return props.children
}