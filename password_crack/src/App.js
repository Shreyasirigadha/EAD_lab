import React, { useState } from 'react';

const PasswordTracker = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const getPasswordStrength = (password) => {
    let score = 0;

    // Check conditions with if statements
    if (/^.{8,}$/.test(password)) {
      score += 1;
    }
    if (/[A-Z]/.test(password)) {
      score += 1;
    }
    if (/[a-z]/.test(password)) {
      score += 1;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      score += 1;
    }
    if (/[0-9]/.test(password)) {
      score += 1;
    }
   
    // Determine password strength based on score
    if (score === 5) {
      return 'Very Strong';
    } else if (score === 4) {
      return 'Strong';
    } else if (score === 3) {
      return 'Medium';
    }else {
      return 'Weak';
    }
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Password Tracker</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Password: </label>
        <input
          
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          style={{ padding: '5px', width: '100%' }}
        />
      </div>
      <div>
        <h4>Password Strength: {passwordStrength}</h4>
      </div>
    </div>
  );
};

export default PasswordTracker;
