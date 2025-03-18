import React from 'react';
import RecoverySuccess from '@/features/recovery/form/success-form';
import backgroundImage from '@/assets/backgroundShapes.png';

const RecoverySuccessPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#D5E7FB]">
            <div className="flex background-light shadow-3xl">
                <div className="mr-8">
                    <img src={backgroundImage} alt="Recovery-bg" className="w-[408px] h-[622px] object-cover rounded-xl" />
                </div>
                <div className="flex items-center justify-center">
                    <RecoverySuccess />
                </div>
            </div>
        </div>
    );
};

export default RecoverySuccessPage;