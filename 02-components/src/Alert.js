// Functions can recieve parameters
// but the corresponding concept in
// React componenet is props
//
// the props parameter will contain all the 
// attributes assigned to the component instance
function Alert(props) {
    console.log(props.msg);
    return <div style={{
      backgroundColor:props.bgcolor,
      padding:"10px",
      marginTop:"5px",
      marginBottom:"5px",
      color:"white"
    }}>
      {props.msg}
    </div>
  }

  export default Alert;