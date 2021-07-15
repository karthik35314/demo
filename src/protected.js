import react from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProctectedRouter = ({compoenents,...rest}) =>{
    let RenderComponents = component;
    let hasToken =JSON.parse(localStorage.getItem('auth'))
    return(
        <Route
        {
            ...rest
        }
        render={
           
            props =>{
                return hasToken !== null ? (
                <RenderComponents {...props} />
                 )
                :
                ( <Redirect
                    to = {
                        {
                            pathname:'/Login'
                        } } />
                )
             }
             }
        
      />
    )
}
 export default ProctectedRouter;