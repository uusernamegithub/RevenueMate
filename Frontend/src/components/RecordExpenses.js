import React, { useState } from 'react';
import Navbar_Merchent from './Navbar_Merchent';
import MerchentOptions from './MerchentOptions';
import '../styles/recordExpenses.css';

export default function RecordExpenses(props) {
  const [vendorName, setVendorName] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [paymentMode, setPaymentMode] = useState('CASH');
  const [status, setStatus] = useState(''); // Track the previous transaction status

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/revenueMate/v1/merchant/recordExpense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: props.id,
          vendorname: vendorName,
          amount: amount,
          reason: reason,
          payment: paymentMode,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Clear the input fields after successful submission
      setVendorName('');
      setAmount('');
      setReason('');
      setPaymentMode('CASH'); // Reset to default

      setStatus('Transaction successfully submitted!'); // Update status after submission
    } catch (error) {
      console.error('Error recording expense:', error);
      setStatus('Transaction failed. Please try again.'); // Update status on error
    }
  };

  return (
    <div className='main' style={{ backgroundColor: props.mode === 'dark' ? '#000000' : '#fff', color: props.mode === 'dark' ? '#e0e0e0' : '#000' }}>
      <Navbar_Merchent heading1="Home" heading2="Profile" heading3="Logout" mode={props.mode} toggleMode={props.toggleMode} />
      <MerchentOptions mode={props.mode} />
      <div className="expense-form-container" style={{ backgroundColor: props.mode === 'dark' ? '#000000' : '#fff', color: props.mode === 'dark' ? '#e0e0e0' : '#000' }}>
        <form onSubmit={handleSubmit} className="expense-form">
          <input
            name="name"
            type="text"
            placeholder="Vendor Name"
            required
            id="vendor-name"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            className="input-field"
            style={{ backgroundColor: props.mode === 'dark' ? '#333' : '#fff', color: props.mode === 'dark' ? '#e0e0e0' : '#000' }}
          />
          <input
            name="amount"
            type="text"
            placeholder="Enter Amount"
            required
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
            style={{ backgroundColor: props.mode === 'dark' ? '#333' : '#fff', color: props.mode === 'dark' ? '#e0e0e0' : '#000' }}
          />
          <input
            name="reason"
            type="text"
            placeholder="Reason Of Expenses"
            required
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="input-field"
            style={{ backgroundColor: props.mode === 'dark' ? '#333' : '#fff', color: props.mode === 'dark' ? '#e0e0e0' : '#000' }}
          />
          <label htmlFor="nature" className="label-text" style={{ backgroundColor: props.mode === 'dark' ? '#000000' : '#fff', color: props.mode === 'dark' ? '#e0e0e0' : '#000' }}>
            Mode of Payment:
          </label>
          <select
            name="nature"
            id="nature"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            className="select-field"
            style={{ backgroundColor: props.mode === 'dark' ? '#333' : '#fff', color: props.mode === 'dark' ? '#e0e0e0' : '#000' }}
          >
            <option value="CASH">Cash</option>
            <option value="CARD">Card</option>
            <option value="UPI">UPI</option>
          </select>
          <button id="transact" type="submit" className="transact-button">
            Transact
          </button>
        </form>
        <p className="transaction-status" style={{ color: props.mode === 'dark' ? '#e0e0e0' : '#000' }}>
          Previous Transaction Status: {status}
        </p>
      </div>
    </div>
  );
}
