import React from 'react';

const PasswordSetting = () => {
    return (
        <div className='container card mt-3 p-4'>
           <h4>Change Password</h4>
           <form className='mt-3'>
            <label htmlFor="">Current Password</label>
            <input type="password" className="form-control my-1 py-2 w-60" placeholder='**********' />
            <label htmlFor="">New Password</label>
            <input type="password" className="form-control my-1 py-2 w-60" placeholder='**********' />
            <label htmlFor="">Confirm Password</label>
            <input type="password" className="form-control my-1 py-2 w-60" placeholder='**********' />
            <div className='mt-2'>
                <button className='btn bg-outline-danger my-2 me-2 w-25'>Cancel</button>
                <button className='btn bg-gradient-primary my-2 ms-2 w-25'>Save</button>
            </div>
            
           </form>
        </div>
    );
};

export default PasswordSetting;