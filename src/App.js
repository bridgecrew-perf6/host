import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() 
{
    const { log, warn } = console;
    const [val, setVal] = useState("");
    const [txt, setTxt] = useState({"prefix":"","body":"","suffix":"",bill:""});
    
    const drawText=(ev)=>
    {
        let tgt = ev.target.value;
        let _prefix = (tgt.length >= 1) ? String.fromCharCode( tgt.substring(0,1).charCodeAt(0) + 61000 ) : "";
        let _body = (tgt.length > 1) ? tgt.substring(1,tgt.length-1) : "" ;
        let _suffix = (tgt.length > 2) ? String.fromCharCode( tgt.substring(tgt.length-1,tgt.length).charCodeAt(0) + 62000 ) : "";

        setTxt(pr=>({...pr,bill:tgt,prefix:_prefix,body:_body,suffix:_suffix}));
    };

    return (
              <div className="App">
                  <header className="App-header"> 
                    <div className="btn-group mb-5">
                    <p style={{"fontFamily":"dev_canterbury-85",fontSize:"60px"}}>{ txt.bill } </p>
                    </div>
                    <div className="btn-group mt-5">
                      <input className="form-control" type="text" 
                        onInput={ev=> drawText(ev)}
                        value={txt.bill} 
                        placeholder="enter text" />
                    </div>
                    <div className="btn-group mt-5">
                    <p style={{"fontFamily":"dev_canterbury-85",fontSize:"60px",color:"#c2c2c2", textShadow:"1px 1px #000"}}>{ txt.prefix }{txt.body}{txt.suffix} </p>
                    </div>
                  </header>
              </div>
  );
}

export default App;
