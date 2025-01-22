import { Input, Button, Label } from "../elements/index";
export const Register = () => {
    return(
        <div>
                  <Input type="text" onChange={(e)=>{
        console.log(e.target.value);
      }} />
      <br/>
      <Input type="password" onChange={(e)=>{
        console.log(e.target.value);
      }} />
      <br/>
      <div className="RadioBtnWrapper">
    <Input type="radio" name="type" value="Freelancer" onChange={(e)=>{
      console.log(e.target.value)
    }} ></Input>
    <Label id="Freelancer" text={"I am Freelancer"} />
    <Input type="radio" name="type" value="Employer" onChange={(e)=>{
      console.log(e.target.value)
    }} ></Input>
    <Label id="Employer" text={"I am Employer"} />
    </div>
    <br/>
    <Button text = {"Sign Up"}/>
    <Button text = {"Log In"}/>
        </div>
    )
}