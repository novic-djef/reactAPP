import TechnoItem from "../components/technoItem";

export default function TechnoList(props) {
    const { technos, handleDeleteTechno } = props;
    return(
        <div className="techno-list">
           <h1>Liste de tous les enregistrements</h1>
             <div>
                {
                  technos.map(techno =>(
                    < TechnoItem techno={techno} key={techno.technoid } handleDeleteTechno={handleDeleteTechno} />
                  ))
                }
             </div>
         </div>
    )
}