import { Navigate} from "react-router-dom"

export const Private=({auth,children})=>{
    return(
        <div>
            {
            auth? children : <Navigate to={'/'}/>
        }
            </div>
    )
}