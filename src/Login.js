import React,{component} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Login = () =>{
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
            
        },
        ValidationSchema : yup.object().shape({
            email: yup.string()
            .email()
            .required("email"),
            password: yup.string()
            .required("password required"),
       
          }),
        onSubmit:(data) =>{
            console.log(data);
            axioms.post('http://localhost:5000/api/Login',data)
            .then(res =>{localStorage.setItem('auth',JSON.stringify(res.data));
            Props.push.history('/Home');
            })
            .catch(err=>{
                console.log("eroor happened")
            })
        }
    })

return(
    <div className="container">
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
     

        <div className="form-group">
        <label>email:</label>
        <input type="text"
        className="form-control" name="email"onChange={formik.handleChange}
        value={formik.values.email}
        />
        {formik.errors.email ? 
        <div className="text-danger">{formik.errors.email} 
        </div> : null }
       </div>

   

        <div className="form-group">
        <label>password:</label>
        <input type="text"
        className="form-control" name="password"onChange={formik.handleChange}
        value={formik.values.password}
        />
        {formik.errors.password ? 
        <div className="text-danger">{formik.errors.password} 
        </div> : null }
        </div>

      
        <button >submit</button>
        
    </form>
    
    
    </div>
)

}

export default Login;s