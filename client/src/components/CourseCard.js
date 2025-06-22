import React from 'react';
import  motion from 'framer-motion';
import { Card, CardContent, Typography, Button, CardMedia } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const CourseCard = ({ course, onSelect }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {course.thumbnail && (
          <CardMedia
            component="img"
            height="140"
            image={course.thumbnail}
            alt={course.title}
          />
        )}
        <CardContent style={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {course.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {course.description}
          </Typography>
        </CardContent>
        <div style={{ padding: 16 }}>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => onSelect(course)}
            fullWidth
          >
            {t('startCourse')}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default CourseCard;