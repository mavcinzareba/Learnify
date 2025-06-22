import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Box,
  Link,
  Alert,
  CircularProgress
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Zaimportuj swoją konfigurację Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(t(getFirebaseError(err.code)));
    } finally {
      setLoading(false);
    }
  };

  const getFirebaseError = (code) => {
    switch(code) {
      case 'auth/invalid-email':
        return 'invalidEmail';
      case 'auth/user-disabled':
        return 'userDisabled';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'invalidCredentials';
      default:
        return 'loginError';
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
        {t('login')}
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label={t('email')}
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label={t('password')}
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          sx={{ mt: 3 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : t('login')}
        </Button>
        

        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body1">
            {t('noAccount')}{' '}
            <Link href="/register" underline="hover" sx={{ fontWeight: 'bold' }}>
              {t('registerHere')}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}