import Link from 'next/link';
import { useState ,useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import {Button ,Form,Loader} from 'semantic-ui-react';
import {useRouter} from 'next/router';

const NewPlant = ()=>{ 

    const [form,setForm]=useState({PlantName:'',NumberOfMoons:'',LengthOfDay:''})

     const [isSubmitting,setIsSubmitting] =useState(false);
     const[errors,setErrors] = useState({});
     const router = useRouter();



useEffect(()=>{ 
if(isSubmitting){
if(Object.keys(errors).length===0){ 

    createPlant();
    
}
else{
    setIsSubmitting(false);
}
}

},[errors])


const createPlant =async ()=>{


try{
    const res= await fetch('http://localhost:3000/api/plants',{
        method:"POST",
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body: JSON.stringify(form)
    })
    router.push('/');
}catch(error){
    console.log(error)
}

}


const handelSubmit =(e)=>{

e.preventDefault();
let errs = validate();
setErrors(errs);
setIsSubmitting(true);
}


const handelChange =(e)=>{

setForm({
    ...form,
    [e.target.name]: e.target.value
})
}


const validate =()=>{

    let err ={};

if(!form.PlantName){
    err.PlantName='PlantName is required';
}

if(!form.NumberOfMoons){
    err.NumberOfMoons='NumberOfMoons is required';
}
if(!form.LengthOfDay){
    err.LengthOfDay='LengthOfDay is required'
}
return err;
}



return(
    <>
    <div className='form-container'>
<h1>Create Plant</h1>
<div>
{
  isSubmitting
  ?<Loader active inline='centered'/>
  :<Form onSubmit={handelSubmit}>

    <Form.Input
    fluid
    error={errors.PlantName ? {content: 
        ' enter Plant Name',pointing:
        'below'} : null}
    label='PlantName'
    placeholder='Plant Name'
    name='PlantName'
    onChange={handelChange}
    />

<Form.Input
fluid
error={errors.NumberOfMoons ? {content: 
    ' enter NumberOfMoons',pointing:
    'below'} : null}
label='Number Of Moons'
placeholder='Number Of Moons'
name='NumberOfMoons'
onChange={handelChange}
/>

<Form.Input
fluid
error={errors.LengthOfDay ? {content: 
    ' enter LengthOfDay',pointing:
    'below'} : null}
label='Length Of Day'
placeholder='Length Of Day'
name='LengthOfDay'
onChange={handelChange}
/>


<Button type='submit'>Create</Button>
  </Form>  
}

</div>

    </div>
    </>
)








}
export default NewPlant;