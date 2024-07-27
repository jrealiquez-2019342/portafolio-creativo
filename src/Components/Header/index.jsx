import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import toast from 'react-hot-toast'
import './index.css'
import bannerBg from './../../assets/img/banner-bg.png';


const Header = () => {
    const [email, setEmail] = useState('jrealiquez-2019342@kinal.edu.gt');
    const [copied, setCopied] = useState(false);

    const handleEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            toast.success('Correo copiado');
            setTimeout(() => setCopied(false), 3000);
        } catch (err) {
            console.log('Correo no copiado correctamente');
        }
    };

    const handleClick = () => {
        window.open('https://cetkinal-my.sharepoint.com/:b:/g/personal/jrealiquez-2019342_kinal_edu_gt/Ea6mKZtm2ppMgpPk8wLhxcIBA2GNrLHLclqS0q6vppRZRQ?e=4DyfMR', '_blank')
    }

    const handleBadge1 = () => {
        window.open('https://www.credly.com/badges/57162c9f-8a37-4167-9192-22a69261911c/public_url', '_blank')
    }
    const handleBadge2 = () => {
        window.open('https://www.credly.com/badges/e5bf4d10-ea8b-4f53-9511-bea9e4c53454/public_url', '_blank')
    }
    const handleBadge3 = () => {
        window.open('https://www.credly.com/badges/f792b294-025c-477f-a41f-49de157e002e/public_url', '_blank')
    }

    const handleBadge4 = () => {
        window.open('https://www.credly.com/badges/49c4aeae-e8e6-4e3c-8496-5e94585dbc97/public_url', '_blank')
    }

    return (
        /*<section className='w-100 h-screen flex flex-row justify-around bg-gradient-to-r from-slate-950 to-cyan-900' id='home'>*/
        <section
            className='w-100 h-screen flex flex-row justify-around banner'
            id='home'
            style={{ backgroundImage: `url(${bannerBg})` }} // Utiliza la imagen importada
        >
            <div className='p-5 flex flex-col justify-evenly'>
                <div>
                    <h2 className='block text-left font-bold text-2xl text-white p-2'>Hola, soy</h2>
                    <h1 className='block text-center font-bold text-7xl text-white'>JOSHUA REALIQUEZ</h1>
                    <h2 className='block text-center font-bold text-2xl text-white p-2'>La perfección más grande es el acto de ser</h2>
                </div>
                <div>
                    <h3 className='block text-center font-bold text-4xl text-white p-2'>Backend en busca de ser FullStack !! </h3>
                </div>
                <div>
                    <div className='flex flex-row justify-center h-auto'>
                        <div className='m-2 cursor-pointer' onClick={handleBadge1}>
                            <img className='h-40' src="https://i.ibb.co/cNq26Cj/introduction-to-cybersecurity.png" alt="Cisco Introduction to Cybsersecurity" />
                            <small className='block w-40 font-bold text-center text-white'>Introduction to Cybersecurity</small>
                        </div>
                        <div className='m-2 cursor-pointer' onClick={handleBadge2}>
                            <img className='h-40' src="https://i.ibb.co/30Y1Gkt/networking-devices-and-initial-configuration.png" alt="Cisco Networking devices" />
                            <small className='block w-40 font-bold text-center text-white'>Networking Devices and Initial Configuration</small>
                        </div>
                        <div className='m-2 cursor-pointer' onClick={handleBadge3}>
                            <img className='h-40' src="https://i.ibb.co/kBvxL3r/networking-basics.png" alt="Cisco Networking basics" />
                            <small className='block w-40 font-bold text-center text-white'>Networking Basics</small>
                        </div>
                        <div className='m-2 cursor-pointer' onClick={handleBadge4}>
                            <img className='h-40' src="https://i.ibb.co/2nQbQgf/endpoint-security.png" alt="Cisco Endpoint Security" />
                            <small className='block w-40 font-bold text-center text-white'>Endpoint Security</small>
                        </div>

                    </div>
                    <div className='pt-2 flex flex-row'>
                        <button className="bg-cyan-500 shadow-lg hover:bg-cyan-600 shadow-cyan-500/50 text-white font-bold rounded-md p-2 ml-2" onClick={handleClick}>Visualiza mi CV</button>
                        <a className='ml-4' href="https://github.com/jrealiquez-2019342" target='_blank'>
                            <FaGithub size={40} color="#FFF" />
                        </a>
                        <a className='ml-4' href="https://www.linkedin.com/in/realiquezjoshua" target='_blank'>
                            <FaLinkedin size={40} color="#FFF" />
                        </a>
                        <div className='flex'>
                            <input
                                className='ml-4 p-2 w-64'
                                type="text"
                                value={email}
                                readOnly
                            />
                            <button className={`bg-cyan-500 shadow-lg hover:bg-cyan-600 shadow-cyan-500/50 text-white font-bold rounded-md p-2 ml-2 ${copied ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleEmail}>
                                {copied ? 'Copiado' : 'Copiar'}
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            <div className='flex'>
                <img className='arreglo-imagen' src="https://i.ibb.co/tbWVdNq/Joshua-17-jul-24.png" alt="Mi foto de presentacion" />
            </div>
        </section>
    )
}

export default Header;