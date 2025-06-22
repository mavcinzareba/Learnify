import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  CardMedia,
  Box,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

export default function HomePage() {
  const { t } = useTranslation();
  const theme = useTheme();

  const courses = [
    { 
      id: 1, 
      title: t('reactBasics'), 
      description: t('reactBasicsDesc'),
      topics: [t('components'), t('hooks'), t('jsx')],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      duration: t('weeks', { count: 2 })
    },
    { 
      id: 2, 
      title: t('advancedJS'), 
      description: t('advancedJSDesc'),
      topics: [t('closures'), t('prototypes'), t('asyncAwait')],
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      duration: t('weeks', { count: 4 })
    },
    { 
      id: 3, 
      title: t('materialUI'), 
      description: t('materialUIDesc'),
      topics: [t('theming'), t('components'), t('styling')],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      duration: t('weeks', { count: 3 })
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold',
          mb: 6,
          color: 'primary.main'
        }}
      >
        {t('availableCourses')}
      </Typography>
      
      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <MotionCard
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={course.image}
                alt={course.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {course.description}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2">{t('courseTopics')}:</Typography>
                  <ul style={{ 
                    paddingLeft: '20px', 
                    margin: '8px 0',
                    color: theme.palette.text.secondary
                  }}>
                    {course.topics.map((topic, index) => (
                      <li key={index}>
                        <Typography variant="body2">{topic}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
                
                <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                  {t('duration')}: {course.duration}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button 
                  variant="contained" 
                  fullWidth 
                  component={Link}
                  to={`/course/${course.id}`}
                  size="large"
                  sx={{
                    fontWeight: 'bold',
                    py: 1.5,
                    background: 'linear-gradient(45deg, #3f51b5 30%, #2196F3 90%)'
                  }}
                >
                  {t('startCourse')}
                </Button>
              </Box>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}