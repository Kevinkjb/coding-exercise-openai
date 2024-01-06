import {useState, useEffect} from 'react'
import CommunityHomes from '../components/CommunityHomes'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    const [dataTwo, setDataTwo] = useState([])
    const [itemShow, setItemShow] = useState(false)
    const [itemShowTwo, setItemShowTwo] = useState(false)
    const [itemShowThree, setItemShowThree] = useState(false)
    const [itemShowFour, setItemShowFour] = useState(false)
    const [itemShowFive, setItemShowFive] = useState(false)
    const [itemShowSix, setItemShowSix] = useState(false)
    const [itemShowSeven, setItemShowSeven] = useState(false)

    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);
    const [lgShow, setLgShow] = useState(false);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const responseTwo = await fetch('openhouse-ai-fe-coding-test/homes.json');
                const resultTwo = await responseTwo.json();
                setDataTwo(resultTwo)
            } catch (error){
                console.log('Error fetching', error)
            }
        }
        fetchData()
    }, [])


    // FILTER ONE ITEM
    const filteredId = dataTwo.filter(item => item.communityId === "56e20c00-805b-44b7-831f-f33e50edd54e");
    // CREATED AN ARRAY TO BE ABLE TO USE REDUCE AND SUMS UP THE TOTAL VALUE OF SPECIFIC COMMUNITY
    const arrayOne = [];
    // PUSH THE FILTERED DATA TO BLE TO GRAB TOTAL NUMBERS
    filteredId.map(item => {
        return arrayOne.push(item.price)
    })
    let result = arrayOne.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue / 3
    }, 0)

    // FILTER TWO ITEM
    const filteredIdTwo = dataTwo.filter(item => item.communityId === "1f161dcd-1221-4b0f-9ced-1498807cca55");
    // CREATED AN ARRAY TO BE ABLE TO USE REDUCE AND SUMS UP THE TOTAL VALUE OF SPECIFIC COMMUNITY
    const arrayTwo = [];
    // PUSH THE FILTERED DATA TO BLE TO GRAB TOTAL NUMBERS
    filteredIdTwo.map(item => {
        return arrayTwo.push(item.price)
    })
    // USE REDUCE TO ADD THE TOTAL AND AVERAGE IT BASE ON THE NUMBER OF COMMUNITY
    let resultTwo = arrayTwo.reduce((accumulator, currentValue) =>{
        return Math.round(accumulator + currentValue / 3)
    }, 0)

    // FILTER THREE ITEM
    const filteredIdThree = dataTwo.filter(item => item.communityId === "f5796140-887c-4cf0-b301-f96f3f4fc275");
    // CREATED AN ARRAY TO BE ABLE TO USE REDUCE AND SUMS UP THE TOTAL VALUE OF SPECIFIC COMMUNITY
    const arrayThree = [];
    // PUSH THE FILTERED DATA TO BLE TO GRAB TOTAL NUMBERS
    filteredIdThree.map(item => {
        return arrayThree.push(item.price)
    })
    // USE REDUCE TO ADD THE TOTAL AND AVERAGE IT BASE ON THE NUMBER OF COMMUNITY
    let resultThree = arrayThree.reduce((accumulator, currentValue) =>{
        return Math.round(accumulator + currentValue / 2)
    }, 0)

    // FILTER FOUR ITEM
    const filteredIdFour = dataTwo.filter(item => item.communityId === "a75e7343-23f3-45c4-a1a4-e88746b11ebf");
    // CREATED AN ARRAY TO BE ABLE TO USE REDUCE AND SUMS UP THE TOTAL VALUE OF SPECIFIC COMMUNITY
    const arrayFour= [];
    // PUSH THE FILTERED DATA TO BLE TO GRAB TOTAL NUMBERS
    filteredIdFour.map(item => {
        return arrayFour.push(item.price)
    })
    // USE REDUCE TO ADD THE TOTAL AND AVERAGE IT BASE ON THE NUMBER OF COMMUNITY
    let resultFour = arrayFour.reduce((accumulator, currentValue) =>{
        return Math.round(accumulator + currentValue / 2)
    }, 0)

    // FILTER FIVE ITEM
    const filteredIdFive = dataTwo.filter(item => item.communityId === "86b42a15-1a35-4819-8646-6719ea275ecf");
    // CREATED AN ARRAY TO BE ABLE TO USE REDUCE AND SUMS UP THE TOTAL VALUE OF SPECIFIC COMMUNITY
    const arrayFive = [];
    // PUSH THE FILTERED DATA TO BLE TO GRAB TOTAL NUMBERS
    filteredIdFive.map(item => {
        return arrayFive.push(item.price)
    })
    // USE REDUCE TO ADD THE TOTAL AND AVERAGE IT BASE ON THE NUMBER OF COMMUNITY
    let resultFive = arrayFive.reduce((accumulator, currentValue) =>{
        return Math.round(accumulator + currentValue)
    }, 0)

    // FILTER SIX ITEM
    const filteredIdSix = dataTwo.filter(item => item.communityId === "7fccecd9-d246-4681-84e9-a92861999c20");
    const arraySix = [];
    filteredIdSix.map(item => {
        return arraySix.push(item.price)
    })
    let resultSix = arraySix.reduce((accumulator, currentValue) =>{
        return Math.round(accumulator + currentValue)
    }, 0)
    // FILTER SEVEN ITEM
    const filteredIdSeven = dataTwo.filter(item => item.communityId === "20244d9f-8147-4633-9b29-4c0ec5a762a9");
    // CREATED AN ARRAY TO BE ABLE TO USE REDUCE AND SUMS UP THE TOTAL VALUE OF SPECIFIC COMMUNITY
    const arraySeven = [];
    // PUSH THE FILTERED DATA TO BLE TO GRAB TOTAL NUMBERS
    filteredIdSeven.map(item => {
        return arraySeven.push(item.price)
    })
    // USE REDUCE TO ADD THE TOTAL AND AVERAGE IT BASE ON THE NUMBER OF COMMUNITY
    let resultSeven = arraySeven.reduce((accumulator, currentValue) =>{
        return Math.round(accumulator + currentValue / 2)
    }, 0)

    return(
        <div className='main'>
           
           <div className='modal--section'>
                <button className='cta' onClick={handleShow}>
                    Check the Average Price in Community
                </button>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={()=> setLgShow(false)}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Community</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='price--section'>
                            {/* Bowness Community Section Where I can toggle the value of the average price */}
                            <div className='home--section'>
                                <h2>Bowness Community</h2>
                                <button className='btn-price' onClick={() => setItemShow(!itemShow)}>
                                    Average Price
                                </button>
                                {itemShow ? <h3 className='average'>${result}</h3> : null }
                            </div>
                            {/* Auburn Bay Community Section Where I can toggle the value of the average price */}
                            <div className='home--section'>
                                <h2>Auburn Bay Community</h2>
                                <button className='btn-price' onClick={() => setItemShowTwo(!itemShowTwo)}>
                                    Average Price
                                </button>
                                {itemShowTwo ? <h3 className='average'> ${resultTwo}</h3> : null }
                            </div>
                            {/* Eau Claire Community Section Where I can toggle the value of the average price */}
                            <div className='home--section'>
                                <h2>Eau Claire Community</h2>
                                <button className='btn-price' onClick={() => setItemShowThree(!itemShowThree)}>
                                    Average Price
                                </button>
                                {itemShowThree ? <h3 className='average'>${resultThree}</h3> : null }
                            </div>
                            {/* Oakridge Community Section Where I can toggle the value of the average price */}
                            <div className='home--section'>
                                <h2>Oakridge Community</h2>
                                <button className='btn-price' onClick={() => setItemShowFour(!itemShowFour)}>
                                    Average Price
                                </button>
                                {itemShowFour ? <h3 className='average'>${resultFour}</h3> : null }
                            </div>
                            {/* Rosedale Community Section Where I can toggle the value of the average price */}
                            <div className='home--section'>
                                <h2>Rosedale Community</h2>
                                <button className='btn-price' onClick={() => setItemShowFive(!itemShowFive)}>
                                    Average Price
                                </button>
                                {itemShowFive ? <h3 className='average'>${resultFive}</h3> : null }
                            </div>
                            {/* Seton Community Section Where I can toggle the value of the average price */}
                            <div className='home--section'>
                                <h2>Seton Community</h2>
                                <button className='btn-price' onClick={() => setItemShowSix(!itemShowSix)}>
                                    Average Price
                                </button>
                                {itemShowSix ? <h3 className='average'>${resultSix}</h3> : null }
                            </div>
                            {/* Varsity Community Section Where I can toggle the value of the average price */}
                            <div className='home--section'>
                                <h2>Varsity Community</h2>
                                <button className='btn-price' onClick={() => setItemShowSeven(!itemShowSeven)}>
                                    Average Price
                                </button>
                                {itemShowSeven ? <h3 className='average'>${resultSeven}</h3> : null }
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
           </div>
        

            <div className='community--homes'>
                {
                dataTwo.map((data) => (
                    <CommunityHomes 
                        key={data.id}
                        price={data.price}
                        area={data.area}
                        type={data.type}
                        id={data.communityId}

                    />
                ))
                }
            </div>
        </div>
    )
}

export default Home