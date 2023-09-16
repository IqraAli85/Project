import React from 'react'
import { Modal } from 'antd';
import { useState } from 'react';
function Bus5() {
    const [showPopup, setShowPopup] = useState(false);
    <Modal
  title="Popup Title"
  visible={showPopup}
  onCancel={() => setShowPopup(false)}
  footer={null}
>
  {/* Popup content goes here */}
</Modal>
  return (
    <div>
  
<button onClick={() => setShowPopup(true)}>Open Popup</button>

    </div>
  )
}

export default Bus5
