import React,{useState,useRef,useEffect} from 'react';
import axios from 'axios';
import styles from './Form.module.sass';
import cn from 'classnames';
import Preview from '../UploadDetails/Preview'
import TextInput from '../../components/TextInput'
import Icon from '../../components/Icon'

import './form.css'



const Form = () => {


  const [bio,setBio] = useState()
  const [site,setSite] = useState()
  const [type,setType] = useState()
  const [name,setName]=useState()
  const [email,setEmail] =useState()
  const [password,setPassword] = useState()
  const [emailError,setEmailError] = useState(false);
  const [err,setErr] = useState(false);

  const [visiblePreview, setVisiblePreview] = useState(false);


const handlesubmit =  () => {

  if((new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email))===false) {
    setEmailError(true)
  } else {
    setEmailError(false)
  }

console.log(image)

let url1 ='https://gbsprojects.xyz/squash/api/react_test';
axios.post('http://localhost:4000/upload-form', {
    "bio":bio,
    "site":site,
    "type":type,
    "name":name,
    "email":email,
    "password":password,
    "profilepic":image
})
.then( (response) => {
  setErr(false);
  console.log(response);
})
.catch((error) => {
  setErr(true)
  console.log(error);
});
console.log(bio)

}


const [image,setImage] = useState()

   const  onChange = (e) => {

    let file = e.target.files[0];

   let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload =(e) => {
      //console.log(e.target.result);
       setImage({file : e.target.result})
    }
    //console.log(profilepic.current.value);
  };

  const onClick =() => {
    handlesubmit()
  }

  return (
    <div className="form-row">
    <div className={cn("marginleft",styles.item)} >
            {err ? <div className="alert alert-danger w-50" role="alert"><p>
              <strong>Server error</strong> can not register </p></div>:<div></div>}

            {emailError ? <div className="alert alert-primary w-50" role="alert"><p>
          <strong>Email is not Valid</strong> enter valid Email. </p></div>:<div></div>}
          

      <form encType="multipart/form-data"> 

      <div className={styles.fieldset}>
                   

    <div className="form-row" >
      <div className="col-md-8 mb-3">
                    <TextInput
                      className={styles.field}
                      label="BIO"
                      name="bio"
                      type="text"
                      onChange={(e) => setBio(e.target.value)}
                      placeholder='write your bio here"'
                      required
                    />
      </div>
      <div className="col-md-8 mb-3">
                    <TextInput
                      className={styles.field}
                      label="SITE"
                      name="site"
                      type="text"
                      onChange={(e) => setSite(e.target.value)}
                      placeholder='https://www.example.com'
                      required
                    />
      </div>

    <div className="form-group row">
      <div className="col-md-4 mb-3">
                  <TextInput
                      className={styles.field}
                      label="EMAIL"
                      name="email"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='email@example.com'
                      required
                    />

      </div>
      <div className="col-md-4 mb-3">
                  <TextInput
                      className={styles.field}
                      label="PASSWORD"
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                      required
                    />
      </div>
    </div>  

    <div className="form-group row">
      <div className="col-md-4 mb-3">
                    <TextInput
                      className={styles.field}
                      label="NAME"
                      name="name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder='Full Name'
                      required
                    />
      </div>
      <div className="col-md-4 mb-3">
                  <TextInput
                      className={styles.field}
                      label="TYPE"
                      name="type"
                      type="text"
                      onChange={(e) => setType(e.target.value)}
                      placeholder='TYPE'
                      required
                    />
      </div>
    </div>  

      {
      ///styles.fieldset ends
      }
            <div className="filewidth">
                <div className={styles.catagory}>Upload Profile picture</div>
                <div className={styles.note}>
                    Drag or choose your file to upload
                  </div>
                  <div className={styles.file}>
                    <input className={styles.load} type="file"   onChange={(e) => onChange(e)}/>
                    <div className={styles.icon}>
                      <Icon name="upload-file" size="24" />
                    </div>
                    <div className={styles.format}>
                      PNG, GIF, JPEG.
                    </div>

              </div>
      </div>
    </div>

<br/>
      <button type="button" onClick={() => onClick()} className="btn btn-primary rounded-pill" >SIGN UP</button>
    </div>
  </form>

  </div>
  
  
  </div>);
  
  
};

export default Form;