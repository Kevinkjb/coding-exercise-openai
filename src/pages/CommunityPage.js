import {useState, useEffect} from 'react'
import Community from '../components/Community'
const CommunityPage = () => {
    const [dataOne, setDataOne] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const dataResponse = await fetch('/openhouse-ai-fe-coding-test/communities.json')
                const dataResult = await dataResponse.json();
                setDataOne(dataResult)
            } catch (error){
                console.error('Error fetching', error)
            }
        }
        fetchData();
    }, []);

    return(
        <div className='community--info'>
            {dataOne && dataOne
                .sort((a, b) => a.name > b.name ? 1 : -1)
                .map((data) => {
                    return(
                        <Community
                            key={data.id}
                            name={data.name}
                            img={data.imgUrl}
                            group={data.group}
                        />
                    )
                })
            }
        </div>
    )
}

export default CommunityPage