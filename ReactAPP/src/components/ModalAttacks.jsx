import React from 'react';

function ModalAttacks({ show, onClose, moves }) {
    if (!show) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg w-[90%] max-w-lg p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Attaques</h2>
                <div className="p-4 bg-white border rounded-xl h-60 text-gray-900 space-y-2 overflow-y-auto">
                    {moves.map((move) => (
                        <div
                            key={move}
                            className="flex bg-gray-900 text-white rounded-xl p-4 items-center justify-between"
                        >
                            <p className="capitalize">{move}</p>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
            </div>
        </div>
    );
}

export default ModalAttacks;
