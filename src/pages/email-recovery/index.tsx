import React from 'react';
import RecoveryForm from '@/features/recovery/form';
import backgroundImage from '@/assets/backgroundShapes.png';

const EmailInput: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white-500">
            <div className="flex background-light shadow-3xl">
                <div className="mr-8">
                    <img src={backgroundImage} alt="Recovery-bg" className="w-[408px] h-[622px] object-cover rounded-xl" />
                </div>
                <div className="flex items-center justify-center">
                    <RecoveryForm />
                </div>
            </div>
        </div>
    );
};

export default EmailInput;