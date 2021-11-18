import React, { useEffect } from "react";
import { useState } from 'react';
import { getBorrowerName } from '../utils/api.js';

export default function LoanAppPage(props) {
  const [name, setName] = useState();

  useEffect(() => {
    setName(getBorrowerName());
  }, []);

  return (
    <div>
      <div>
        {`Congrats ${name}, you submitted the form successfully!`}
      </div>
    </div>
  );
}
