import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CoursePage() {
  const { id } = useParams();
  const { t } = useTranslation();
  
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        {t('course')} {id}
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" paragraph>
          {t('courseContentPlaceholder')}
        </Typography>
        <Button 
          variant="contained" 
          component={Link}
          to="/"
          sx={{ mt: 3 }}
        >
          {t('backToHome')}
        </Button>
      </Box>
    </Container>
  );
}