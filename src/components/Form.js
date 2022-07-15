// import React, { useState } from "react";


// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");


//   function handleFirstNameChange(event){
//     setFirstName(event.target.value);
//   }
  
//   function handleLastNameChange(event){
//     setLastName(event.target.value);
//   }

//   return (
//     <form>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;
import React from "react";
function Form(props){
  return(
    <form>
      <input
      type='text'
      onChange={props.handleFirstNameChange}
      value={props.firstName}
      />
      <input
      type='text'
      onChange={props.handleLastNameChange}
      value={props.lastName}
      />
      <button type='submit'>SUBMIT</button>
    </form>
  );
}
export default Form;