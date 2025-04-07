import React from 'react';
import { ArrowLeft, Edit2 } from 'iconsax-react';

const UserInfo = () => {
  return (
    <div className="justify-content-center align-items-start vh-100 bg-light p-2">
    <div
      className="card p-4 text-white"
      style={{
        background: "linear-gradient(135deg, #00A3FF, #007BFF)",
        borderRadius: "15px",
        // borderBottomRightRadius: "100px",
        height: "250px",
        overflow: "hidden",
        borderEndStartRadius: "89px",
        borderEndEndRadius: "89px"

      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
               <button
                 className="btn rounded-pill px-3 py-1 d-flex align-items-center gap-2"
                 style={{
                   backgroundColor: "#E6F0FA",
                   color: "#00A3FF",
                   fontSize: "16px",
                   fontWeight: "500",
                   border: "none",
                   height: "3rem",
                   width: "8rem",
                 }}
                //  onClick={() => navigate("/login_empty")}
               >
                 <ArrowLeft size="20" color="#00A3FF" /> 
                 Login
               </button>
               <h2
            className="text-white mb-0"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            Register
          </h2>
      </div>
      <div className="position-relative d-flex justify-content-center mt-3">
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: "#6EC9F3",
              position: "relative",
            }}
          >
            {/* Head */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "white",
                position: "absolute",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            ></div>

            {/* Body */}
            <div
              style={{
                width: "70px",
                height: "34px",
                backgroundColor: "white",
                borderRadius: "50% / 50%",
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            ></div>
          </div>
          <div
            className="position-absolute"
            style={{
              top: "-14px",
              right: "calc(50% - 72px)",
              backgroundColor: "#0D47A1",
              borderRadius: "50%",
              padding: "6px",
            }}
          >
            <Edit2 size="32" color="#ffffff" variant="Bold"/>
          </div>
        </div>
    </div>
    <div className='d-flex mt-4 justify-content-center'>
      hello
    </div>      
  </div>
  )
}

export default UserInfo;