import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteMembresia = () => {
    const { id } = useParams();
    const history = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/membresias/${id}`);
            alert('Membresía eliminada con éxito');
            history.push('/membresias');
        } catch (error) {
            console.error('Error deleting membresia:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Eliminar Membresía</h1>
            <p>¿Estás seguro de que deseas eliminar esta membresía?</p>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
                Eliminar
            </button>
        </div>
    );
};

export default DeleteMembresia;
