import React from 'react';
import RecoveryForm from '@/features/recovery/form';
import backgroundImage from '@/assets/backgroundShapes.png';

const EmailInput: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#DCE6F1]">
            <div 
                className="flex bg-white rounded-[16px] shadow-custom p-[32px]"
                style={{ boxShadow: '0px 0px 40px 0px #5687BB3D' }}
            >
                <div className="rounded-[16px] overflow-hidden mr-[32px]">
                    <img src={backgroundImage} alt="Recovery" className="w-[408px] h-[622px] rounded-[16px] object-cover bg-cover bg-no-repeat" />
                </div>
                <div className="flex items-center justify-center">
                    <RecoveryForm />
                </div>
            </div>
        </div>
    );
};

export default EmailInput;
