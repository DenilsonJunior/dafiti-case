import { SecGuide } from './styles.js';

function Guide() {
    return (
        <div className='min-conteudo'>
            <SecGuide>
                <div className='card card1'>
                    <img className='img' src="./assets/img/img1.jpg" alt="" />
                    <div className='boxText'>
                        <p className='tl'>Where does it come from</p>
                        <p className='tm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    </div>
                </div>
                <div className='card card2'>
                    <img className='img' src="./assets/img/img2.jpg" alt="" />
                    <div className='boxText'>
                        <p className='tl'>Where does it come from</p>
                        <p className='tm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    </div>
                </div>
                <div className='card card3'>
                    <img className='img' src="./assets/img/img3.jpg" alt="" />
                    <div className='boxText'>
                        <p className='tl'>Where does it come from</p>
                        <p className='tm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    </div>
                </div>
            </SecGuide>
        </div>
    )
}

export default Guide