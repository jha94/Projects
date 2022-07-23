import UserContext from './Context'
function Index1(){
    return(
      <UserContext.Consumer>
       {value=> <h1>{value}</h1>}
        </UserContext.Consumer>
    )
  }
  export default Index1;