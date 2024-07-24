import React, { useEffect, useRef } from 'react'

function TenthMarkSheet() {
    let FirstNameinputref = useRef();
    let SecondNameinputref = useRef();
    let TelInputRef = useRef();
    let HinInputRef = useRef();
    let EngInputRef = useRef();
    let MathInputRef = useRef();

    let SciInputRef = useRef();
    let SocInputRef = useRef();
    let ResultFinal = useRef();

    let TelInputspanRef = useRef();
    let HinInputspanRef = useRef();
    let EngInputspanRef = useRef();
    let MathInputspanRef = useRef();

    let SciInputspanRef = useRef();
let SocInputspanRef = useRef();

 


  return (
    <div>
       
            <form>
                <div> <label>FirstName:</label>
                <input type="text" ref={FirstNameinputref}  onFocus={()=>{
                FirstNameinputref.current.style.backgroundColor="pink";
               }}
               onBlur={()=>{
                FirstNameinputref.current.style.backgroundColor="grey";
               }}></input><span ></span></div>
               <div> <label>SecondName:</label>
               <input type="text" ref={SecondNameinputref} onFocus={()=>{
                SecondNameinputref.current.style.backgroundColor="pink";
               }}
               onBlur={()=>{
                SecondNameinputref.current.style.backgroundColor="grey";
               }}></input><span></span></div>
               <div>
                <label>Telugu</label>
                <input type="number" ref={TelInputRef} onChange={()=>{
                    TelInputspanRef.current.innerHTML = TelInputRef.current.value >= 35 ? "Pass":"Fail";

                   TelInputspanRef.current.style.backgroundColor=TelInputRef.current.value >= 35 ? "green":"red";

                }} onFocus={()=>{
                    TelInputRef.current.style.backgroundColor = "pink";
                }}
                onBlur={()=>{

                    TelInputRef.current.style.backgroundColor = "grey";
                }}></input><span ref={TelInputspanRef} ></span></div>
               <div>    <label>Hindi</label>
               <input type="number" ref={HinInputRef} onChange={()=>{
                    HinInputspanRef.current.innerHTML = HinInputRef.current.value >= 35 ? "Pass":"Fail";

                   HinInputspanRef.current.style.backgroundColor=HinInputRef.current.value >= 35 ? "green":"red";


                }} onFocus={()=>{
                    HinInputRef.current.style.backgroundColor = "pink";
                }}
                onBlur={()=>{

                    HinInputRef.current.style.backgroundColor = "grey";
                }}></input><span ref={HinInputspanRef} ></span></div>
               <div>   <label>Maths</label>
               <input type="number" ref={MathInputRef} onChange={()=>{
                    MathInputspanRef.current.innerHTML = MathInputRef.current.value >= 35 ? "Pass":"Fail";

                   MathInputspanRef.current.style.backgroundColor=MathInputRef.current.value >= 35 ? "green":"red";

                    

                }} onFocus={()=>{
                    MathInputRef.current.style.backgroundColor = "pink";
                }}
                onBlur={()=>{

                    MathInputRef.current.style.backgroundColor = "grey";
                }}></input><span ref={MathInputspanRef}></span>
               <div><label>English</label>
               <input type="number" ref={EngInputRef} onChange={()=>{
                    EngInputspanRef.current.innerHTML = EngInputRef.current.value >= 35 ? "Pass":"Fail";

                   EngInputspanRef.current.style.backgroundColor=EngInputRef.current.value >= 35 ? "green":"red";

                
                 
                   
                    

                }} onFocus={()=>{
                    EngInputRef.current.style.backgroundColor = "pink";
                }}
                onBlur={()=>{

                    EngInputRef.current.style.backgroundColor = "grey";
                }}></input><span  ref={EngInputspanRef}></span></div></div>
               <div><label>Science</label>
               <input type="number" ref={SciInputRef} onChange={()=>{
                    SciInputspanRef.current.innerHTML = SciInputRef.current.value >= 35 ? "Pass":"Fail";

                   SciInputspanRef.current.style.backgroundColor=SciInputRef.current.value >= 35 ? "green":"red";

                
                 
                   
                    

                }} onFocus={()=>{
                    SciInputRef.current.style.backgroundColor = "pink";
                }}
                onBlur={()=>{

                    SciInputRef.current.style.backgroundColor = "grey";
                }}></input><span  ref={SciInputspanRef}></span></div>
           
                <div>   <label>Social</label>
                <input type="number" ref={SocInputRef} onChange={()=>{
                    SocInputspanRef.current.innerHTML = SocInputRef.current.value >= 35 ? "Pass":"Fail";

                   SocInputspanRef.current.style.backgroundColor=SocInputRef.current.value >= 35 ? "green":"red";

                
                 
                   
                    

                }} onFocus={()=>{
                    SocInputRef.current.style.backgroundColor = "pink";
                }}
                onBlur={()=>{

                    SocInputRef.current.style.backgroundColor = "grey";
                }}></input><span  ref={SocInputspanRef}></span></div>
                
                <button type="button" onClick={()=>{

                    let First = FirstNameinputref.current.value;
                    let Second = SecondNameinputref.current.value;
                    let telMarks = Number(TelInputRef.current.value);
                    let HinMarks = Number(HinInputRef.current.value);

                    let EngMarks = Number(EngInputRef.current.value);
                
                    let MathMarks = Number(MathInputRef.current.value);

                    let SciMarks = Number(SciInputRef.current.value);

                    let SocMarks = Number(SocInputRef.current.value);



                    let Total = telMarks + HinMarks + EngMarks + MathMarks + SciMarks + SocMarks;

                    ResultFinal.current.innerHTML = `${First} ${Second} Your Total Score is ${Total}`;
                   


                    
                
             
            
            
            }}>Calculate</button>
            
    
            <p ref={ResultFinal}></p>
            </form>
           

    </div>
  )
}

export default TenthMarkSheet;