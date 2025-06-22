import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Box,
  Link,
  Alert,
  CircularProgress,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  LinearProgress
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff 
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, db } from '../firebaseConfig';

export default function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    showPassword: false,
    showConfirmPassword: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [redirectProgress, setRedirectProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (success) {
      timer = setInterval(() => {
        setRedirectProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(timer);
            navigate('/dashboard');
            return 100;
          }
          return oldProgress + (100 / 30);
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [success, navigate]);

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setFormData({ ...formData, showConfirmPassword: !formData.showConfirmPassword });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError(t('passwordMismatch'));
      return;
    }

    if (formData.password.length < 6) {
      setError(t('weakPassword'));
      return;
    }

    if (!validateEmail(formData.email)) {
      setError(t('invalidEmail'));
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);
    setRedirectProgress(0);
    
    try {
      // 1. Rejestracja użytkownika w Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      
      console.log('User registered:', userCredential.user.uid); // Debug log

      // 2. Zapisz dane użytkownika w Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        createdAt: new Date(),
        role: 'student',
        lastLogin: new Date()
      });

      console.log('User data saved to Firestore'); // Debug log

      setLoading(false);
      setSuccess(true);
      
    } catch (err) {
      console.error('Registration error:', err); // Debug log
      setLoading(false);
      setError(t(getFirebaseError(err.code)));
    }
  };

  const getFirebaseError = (code) => {
    switch(code) {
      case 'auth/email-already-in-use':
        return 'emailInUse';
      case 'auth/invalid-email':
        return 'invalidEmail';
      case 'auth/weak-password':
        return 'weakPassword';
      case 'auth/operation-not-allowed':
        return 'operationNotAllowed';
      default:
        return 'registerError';
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
        {t('register')}
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {t(error)}
        </Alert>
      )}
      
      {success ? (
        <>
          <Alert severity="success" sx={{ mb: 3 }}>
            {t('registrationSuccess')} {t('redirecting')}
          </Alert>
          <LinearProgress variant="determinate" value={redirectProgress} />
        </>
      ) : (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            label={`${t('firstName')} *`}
            fullWidth
            margin="normal"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            required
          />
          <TextField
            label={`${t('lastName')} *`}
            fullWidth
            margin="normal"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            required
          />
          <TextField
            label={`${t('email')} *`}
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange('email')}
            required
          />
          
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="password">{t('password')} *</InputLabel>
            <OutlinedInput
              id="password"
              type={formData.showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={t('password')}
              required
            />
          </FormControl>
          
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="confirm-password">{t('confirmPassword')} *</InputLabel>
            <OutlinedInput
              id="confirm-password"
              type={formData.showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange('confirmPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {formData.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={t('confirmPassword')}
              required
            />
          </FormControl>
          
          <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
            {t('passwordRequirements')}
          </Typography>
          
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : t('register')}
          </Button>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body1">
              {t('haveAccount')}{' '}
              <Link href="/login" underline="hover" sx={{ fontWeight: 'bold' }}>
                {t('loginHere')}
              </Link>
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
}