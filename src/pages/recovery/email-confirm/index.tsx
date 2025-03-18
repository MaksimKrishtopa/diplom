import React from 'react';
import RecoveryEmailConfirmation from '@/features/recovery/form/confirm-form';
import backgroundImage from '@/assets/backgroundShapes.png';

const EmailConfirmPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#D5E7FB]">
            <div className="flex background-light shadow-3xl">
                <div className="mr-8">
                    <img src={backgroundImage} alt="Recovery-bg" className="w-[408px] h-[622px] object-cover rounded-xl" />
                </div>
                <div className="flex items-center justify-center">
                    <RecoveryEmailConfirmation />
                </div>
            </div>
        </div>
    );
};

export default EmailConfirmPage;