/* eslint-disable no-undef */
import { useState } from "react";

export default function TechnoAdd(props) {
  const [techno, setTechno] = useState ({
    technoname: '',
    technocategory: '',
    technodescription: ' '
  });
  
  const {handleAddTechno} = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddTechno(techno);
    setTechno({
      technoname: '',
      technocategory: '',
      technodescription: ' '
    });
  }

  function handleChange(evt){
    const {name, value} = evt.target;
    setTechno({...techno, [name]: value});
  }

    return(
        <div className="technoAdd">
            <h1>Ajout techno</h1>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor="technoname">nom de la techno</label>
                    <br/>
                    <input type="text" name="technoname"  id="technoname" value={techno.technoname} onChange={(evt) => handleChange(evt)} placeholder="entrer le nom de la technologie que vous maitrisez" />
                    <br />
                    <label htmlFor="technocategory">Categorie</label>
                    <br/>
        
                    <select name="technocategory" id="technocategory" value={techno.technocategory} onChange={(evt)=> handleChange(evt)}>
                        <option value="">Selectionnez votre categorie</option>
                        <option value=" front"> Front-end</option>
                        <option value="back">Back-end</option>
                        <option value="full-stack">Full-stack</option>
                        <option value="autre">Autre</option>
                    </select>
                    <br />
                    <label htmlFor="technodescription">Description</label><br />
                    <textarea
                     name="technodescription" 
                     id="technodescription"
                     cols="30"
                     rows="10"
                    placeholder="Decrivez vos competence ici" 
                    value={techno.technodescription} onChange={(evt)=>handleChange(evt)}>
                    </textarea>
                    <br />
                    <input type="submit" value="Ajout Techno" className="btn" />
                </form>
            </div>
        </div>
    )
}