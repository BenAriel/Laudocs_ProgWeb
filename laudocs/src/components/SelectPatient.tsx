"use client"

import { SelectPatientProps } from '@/interfaces/AllInterfaces';
import ListTypeConsult from './ListTypeConsult';
import Image from 'next/image';

export default function SelectPatient({ selectedPatient, removePatientSelected }: SelectPatientProps) {
    return (
        <div className="bg-white flex flex-col justify-between h-full w-full p-4 text-[#173D65] font-bold rounded-r-lg border border-[#173D65]">
            {selectedPatient ? (
                <div className='text-left'>
                    <div className="flex items-center justify-between mb-1">
                        <div className='flex items-center ml-2'>
                            <Image 
                                src="/assets/patientIcon.svg" 
                                alt="Icone Médico" 
                                width={24} 
                                height={24} 
                                className="mr-2"
                            />
                            <h3 className="ml-4 text-2xl font-extrabold">
                                {selectedPatient.name}, {selectedPatient.age} anos
                            </h3>
                        </div>
                        <button className="w-10 h-7 rounded-md bg-[#15AAAA] text-white flex items-center justify-center" onClick={removePatientSelected}>
                            <span className="text-xs font-bold">X</span>
                        </button>
                    </div>

                    <div className='flex items-center ml-2 mt-3'>
                        <Image 
                            src="/assets/medicIcon.svg" 
                            alt="Icone Hospital" 
                            width={24} 
                            height={24} 
                            className="mr-2"
                        />
                        <p className="text-left">Médico Solicitante: {selectedPatient.solicitingDoctor}</p>
                        <hr className='border-1 border-cyan-800 mt-3' />
                    </div>
                    <hr className='border-1 border-cyan-800 mt-7' />

                    <h1 className='text-2xl mt-4'>Clique em uma opção para iniciar a consulta:</h1>
                    <ListTypeConsult patient={selectedPatient}></ListTypeConsult>
                </div>
            ) : (
                <h1 className="mt-4 mb-7 text-center text-2xl font-extrabold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Selecione o Paciente
                </h1>
            )}
            <div className="flex flex-col space-y-4 text-left flex-grow p-4">
                {!selectedPatient && <p>Clique em algum paciente do menu a esquerda.</p>}
            </div>
        </div>
    );
}
