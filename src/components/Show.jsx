import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import whitReactContent from 'sweetalert2-react-content';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

import { db } from '../firebaseConfig/firebase.js';

const mySwal = whitReactContent(Swal);

export const Show = () => {

    //1 configurar useState (hook)
    const [heroes, setHeroes] = useState([])
    //2 referenciamos a la db de firestore
    const heroesCollection = collection(db, "heroes")
    //3 funcion para mostrar todos los docs
    const getHeroes = async () => {
        const data = await getDocs(heroesCollection)        
        setHeroes(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    }
    //4 funcion para eliminar un doc
    const deleteHeroe = async (id) => {
        const heroeDoc = doc(db, "heroes", id)
        await deleteDoc(heroeDoc)
        getHeroes()
    }

    //5 funcion para la confirmacion de sweet alert

    const confirmDelete = (id, name) => {
        mySwal.fire({
            title: `Estas Seguro/a de eliminar a ${name}? `,
            text: "No podes revertir esta Accion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Deseo Borrarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteHeroe(id)//llamamos a la funcion eliminar
                Swal.fire(
                    'Borrado!',
                    'Tu Heroe ha sido Borrado/a.',
                    'success'
                )
            }
        })
    }

    //6 use Effect
    useEffect(() => {
        getHeroes()
    }, [])
    //7 devolver la vista de nuestro componente

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='d-grid gap-2'>
                        <Link to='/create' className='btn btn-secondary mt-2 mb-2'>CREAR</Link>
                    </div>
                </div>
                
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <td>Nombre</td>
                            <td>Nombre real</td>
                            <td>Edad</td>
                            <td>Acciones</td>
                        </tr>
                    </thead>
                    <tbody>
                        {heroes.map((heroe) => (
                            // eslint-disable-next-line react/jsx-key
                            <tr>
                                <td>{heroe.name}</td>
                                <td>{heroe.realName}</td>
                                <td>{heroe.age}</td>
                                <td>
                                    <Link to={`/edit/${heroe.id}`} className='btn btn-success'><i className="fa-solid fa-pencil"></i></Link>
                                    <button onClick={()=>confirmDelete(heroe.id, heroe.name)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>                                      
                        ))}
                    </tbody>
                </table>
            </div>            
        </div>
    )
}