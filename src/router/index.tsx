import { AuthNoLogin, AuthWithLogin } from "./AuthProvider";
import { Routes, Route, Navigate } from 'react-router-dom'
import loadable from "@loadable/component";

// 页面组件
// import BasicLayout1 from '@/layouts/BasicLayout/BasicLayout1'
import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'
import Login from '@/pages/Login'
import Loading from "../components/Loading";
import tools from "@/util/tools";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// ==================
// 类型声明
// ==================
import { RootState, Dispatch } from "@/store";


// 异步加载
const [Home] = [
    () => import('@/pages/Home')
].map(item => {
    return loadable(item as any, {
        fallback: <Loading />
    })
})

function RouterCom(): JSX.Element {
    const dispatch = useDispatch<Dispatch>();
    const userinfo = useSelector((state: RootState) => state.app.userinfo);

    useEffect(() => {
        const userTemp = sessionStorage.getItem("userinfo");
        /**
         * sessionStorage中有user信息，但store中没有
         * 说明刷新了页面，需要重新同步user数据到store
         * **/
        if (userTemp && !userinfo.userBasicInfo) {
            dispatch.app.setUserInfo(JSON.parse(tools.uncompile(userTemp)));
        }
    }, [dispatch.app, userinfo.userBasicInfo]);


    return (
        <Routes>
            <Route
                path='/'
                element={
                    <AuthNoLogin>
                        <BasicLayout />
                    </AuthNoLogin>
                }
            >
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="home" element={<Home />} />
            </Route>
            <Route
                path="user"
                element={
                    <AuthWithLogin>
                        <UserLayout />
                    </AuthWithLogin>
                }
            >
                <Route path="login" element={<Login />}></Route>
            </Route>
        </Routes>
    )
}

export default RouterCom