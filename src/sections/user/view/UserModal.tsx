import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface UserModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (userData: { prefix: string; phone?: string; address: string; extraAddress?: string; description: string }) => void;
}

export function UserModal({ open, onClose, onSubmit }: UserModalProps) {
  const [prefix, setPrefix] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit({ prefix, phone, address, extraAddress, description });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Prefix"
          type="text"
          fullWidth
          variant="outlined"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Phone"
          type="text"
          fullWidth
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Address"
          type="text"
          fullWidth
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Extra Address"
          type="text"
          fullWidth
          variant="outlined"
          value={extraAddress}
          onChange={(e) => setExtraAddress(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
