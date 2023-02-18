import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';

function App() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [users,setUsers] = useState([]);
  const [edit,setEdit] = useState(false);
  const [active,setActive] = useState(null);

  const adduser = (e) =>{


    e.preventDefault();

    // if(name.length!==0){

    //   setUsers(newdata=>[...newdata,users])
    //   setName("") 
        
      
    // }
    
    const user = {



        name,
        email,

        address,
    };
    
    if (edit) {
      let copy = users;
      Object.assign(copy[active],user);
      setUsers([...copy]);

      setActive (null)
      setEdit(false);

    } else {

      setUsers([...users,user]);
    }
      setName("");
      setEmail("");
      setAddress("");

  };

      const handelEdit = (index) => {
      
        const user = users[index];
        setName(user.name);
        setEmail(user.email);
        setAddress(user.address);
        setEdit(true);
        setActive(index);
      };

      const deleteUser = (index) =>{
          if(window.confirm("are you sure you want to delete?")){
            
            users.splice(index,1);
          setUsers([...users]);
          //   let copy = users.filter(item => item !== user);
          //   setUsers([...copy]);
            
          }
          
      };

  return (
    <div className="App">
      <User/>
      <h1 >React crudd without Database</h1>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <form onSubmit={adduser}>
              
              <div className='form-group' >
                <label>Name</label>
                <input type="text" className='from-control' value={name} onChange={(e)=> setName(e.target.value)}></input>
              </div>
              <div className='form-group'>
                <label>email</label>
                <input type="text" className='from-control' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
              </div>
              <div className='form-group'>
                <label>address</label>
                <input type="text" className='from-control'value={address} onChange={(e)=> setAddress(e.target.value)}></input>
              </div>
              <button className='btn'>{edit ? "Update":"Add"}</button>
            </form>
          </div>
        </div>
      </div>

        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

                <tbody>
                  {
                    users.map((user,index)=>{
                      return (
                        <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>

                        <td>
                          <button className='btn btn-info' onClick={(e) => handelEdit(index)}>Edit</button>
                        </td>
                          <td>
                                <button className='btn btn-info' onClick={(e)=>deleteUser(index)}>DELETE</button>
                          </td>
                        </tr>
                      )
                    })
                  }

                </tbody>
        </table>
    </div>
      );
}

export default App;
