import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="loading">
            <p>Loading...</p>
            <style jsx>{`
                .loading {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.5);
                    color: white;
                    font-size: 1.5rem;
                }
            `}</style>
        </div>
    );
};

export default Loading;