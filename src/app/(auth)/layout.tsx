import React from 'react';
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div className="w-screen  min-h-screen bg-gradient-to-t from-gray-100 to-gray-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
                {children}
            </div>
        </div>
        
    );
}

export default AuthLayout;