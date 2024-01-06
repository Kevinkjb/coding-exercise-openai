const CommunityHomes = ({price, area, type, id}) =>{
    return(
        <>
            <div className="community--box">
                <div className="community">
                    <img className="community-img" src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" alt="No Img" />
                </div>
                <section className="home--details">
                    <p>Price: ${price}</p>
                    <p>Area: {area} sqft</p>
                    <p>Type: {type}</p>
                </section>
            </div>
        </>
    )
}

export default CommunityHomes