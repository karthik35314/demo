import React,{component} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
//import { PromiseProvider } from 'mongoose'
import axiom from 'axiom'

const Register = () =>{
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            list:'',
            password:'',
            confirmpassword:'',
        },
        ValidationSchema : yup.object().shape({
            name: yup.string()
            .required("name is required")
            .min(5,"min 5 charc")
            .trim()
            .strict(),
            email: yup.string()
            .email()
            .required("email"),
            list: yup.string()
            .required("list required"),
            password: yup.string()
            .required("password required"),
            confirmpassword: yup.string()
            .oneOf([yup.ref('password'),null],"confirmpassword not same")
            .required("confirm password required")
          }),
        onSubmit:(data) =>{
            console.log(data);
            axiom.post('http://localhost:5000/api/register',data)
            .then(res =>{
            Props.push.history('/login');
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
        <label>name:</label>
        <input type="text"
        className="form-control" name="name"onChange={formik.handleChange}
        value={formik.values.name}
        />
        {formik.errors.name ? 
        <div className="text-danger">{formik.errors.name} 
        </div> : null }
        </div> 
        
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
    <label>list</label>
  <select name="list"onChange={formik.handleChange}
        value={formik.values.list}class="form-control" id="sel1">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  {formik.errors.list ? 
        <div className="text-danger">{formik.errors.list} 
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

        <div className="form-group">
        <label>confirm password:</label>
        <input type="text"
        className="form-control" name="confirmpassword"onChange={formik.handleChange}
        value={formik.values.confirmpassword}
        />
        {formik.errors.email ? 
        <div className="text-danger">{formik.errors.email} 
        </div> : null }
        </div>

        <button >submit</button>
        
    </form>
     </div>
)

}

export default Register;