const withAuth = (InnerCompenent) => (props) => {
  return(props.name == "ABC" && props.password == "111" ? <InnerCompenent {...props}/>:<p>Wrong user</p>
  )
  }

export default withAuth;
