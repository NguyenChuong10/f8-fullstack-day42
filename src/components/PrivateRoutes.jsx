import { Navigate } from "react-router";
import { useMeQuery } from "../services/auth";

function PrivateRoutes({children}){

    const {isFetching , isSuccess , isError , isLoading} = useMeQuery();

    console.log(isFetching , isSuccess ,  isError , isLoading )

    if(isLoading) {
        return <div>Loading ...</div>
    }

    if(isError) {
        return <Navigate to = "/register" />
    }

    return children;
}

export default PrivateRoutes;