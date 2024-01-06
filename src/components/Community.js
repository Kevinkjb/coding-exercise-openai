

const Community = ({name, img, group}) =>{
    return(
        <>
            <div className="community--box">
                <div className="community">
                    <img className="community-img" src={img} alt={name + ' Image'} />
                </div>
                <section className="box--info">
                    <h4>Name: {name}</h4>
                    <h5>Group: {group} </h5>

                </section>
            </div>
        </>
    )
}

export default Community