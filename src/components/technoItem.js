export default function TechnoItem(props) {
    const { techno, handleDeleteTechno } = props;
    return (
        <div className="blog">
        <div key={techno.technoid} className="card">
                        <h3>nom de la techno</h3>
                        <p>{techno.technoname}</p>
                        <h3>Category</h3>
                        <p>{techno.technocategory}</p>
                        <h3>decription </h3>
                        <p>{techno.technodescription}</p>
                        <div className="footer">
                            <button className="btn-delete" onClick={()=> handleDeleteTechno(techno.technoid)}> supprimer</button>
                        </div>
                    </div>

                    </div>
    )

}