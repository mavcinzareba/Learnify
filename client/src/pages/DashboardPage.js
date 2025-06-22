import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Tabs,
  Tab
} from '@mui/material';
import { 
  School, 
  Assignment, 
  Quiz, 
  Stars, 
  AccountCircle,
  Notifications,
  Bookmark,
  History
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function DashboardPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [notifications] = useState([
    { id: 1, text: 'Nowy kurs dostępny: JavaScript dla początkujących', read: false },
    { id: 2, text: 'Zadanie do wykonania w kursie React', read: true }
  ]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const coursesInProgress = [
    { id: 1, title: 'React od podstaw', progress: 65 },
    { id: 2, title: 'Zaawansowany CSS', progress: 30 }
  ];

  const completedCourses = [
    { id: 3, title: 'Podstawy JavaScript', score: 92 },
    { id: 4, title: 'HTML5 i semantyka', score: 88 }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Panel użytkownika */}
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ 
                width: 100, 
                height: 100, 
                margin: '0 auto 16px',
                bgcolor: 'primary.main'
              }}>
                <AccountCircle fontSize="large" />
              </Avatar>
              <Typography variant="h5" gutterBottom>
                {t('welcomeBack')}, Jan!
              </Typography>
              <Typography color="text.secondary">
                {t('memberSince')} 2023
              </Typography>
              <Button 
                variant="outlined" 
                sx={{ mt: 2 }}
                fullWidth
              >
                {t('editProfile')}
              </Button>
            </CardContent>
          </Card>

          {/* Powiadomienia */}
          <Card>
            <CardContent>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 2 
              }}>
                <Notifications color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">
                  {t('notifications')}
                </Typography>
                <Badge 
                  badgeContent={notifications.filter(n => !n.read).length} 
                  color="error" 
                  sx={{ ml: 1 }}
                />
              </Box>
              <List>
                {notifications.map((notification) => (
                  <ListItem key={notification.id}>
                    <ListItemIcon>
                      <Notifications color={notification.read ? 'disabled' : 'primary'} />
                    </ListItemIcon>
                    <ListItemText
                      primary={notification.text}
                      sx={{ 
                        color: notification.read ? 'text.secondary' : 'text.primary'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Główna zawartość */}
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange}
                sx={{ mb: 3 }}
              >
                <Tab label={t('inProgress')} icon={<History />} />
                <Tab label={t('completed')} icon={<Stars />} />
                <Tab label={t('bookmarked')} icon={<Bookmark />} />
              </Tabs>

              {activeTab === 0 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {t('yourProgress')}
                  </Typography>
                  {coursesInProgress.map((course) => (
                    <Box key={course.id} sx={{ mb: 3 }}>
                      <Typography>{course.title}</Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center' 
                      }}>
                        <Box sx={{ 
                          width: '100%', 
                          mr: 1, 
                          bgcolor: 'grey.200',
                          borderRadius: 1,
                          height: 8
                        }}>
                          <Box sx={{ 
                            width: `${course.progress}%`, 
                            bgcolor: 'primary.main',
                            borderRadius: 1,
                            height: 8
                          }} />
                        </Box>
                        <Typography variant="body2">
                          {course.progress}%
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                  <Button variant="contained">
                    {t('continueLearning')}
                  </Button>
                </Box>
              )}

              {activeTab === 1 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {t('completedCourses')}
                  </Typography>
                  {completedCourses.map((course) => (
                    <Box key={course.id} sx={{ mb: 2 }}>
                      <Typography>{course.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('finalScore')}: {course.score}%
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}

              {activeTab === 2 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {t('bookmarkedContent')}
                  </Typography>
                  <Typography color="text.secondary">
                    {t('noBookmarks')}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Rekomendowane kursy */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ 
                display: 'flex', 
                alignItems: 'center' 
              }}>
                <School color="primary" sx={{ mr: 1 }} />
                {t('recommendedCourses')}
              </Typography>
              <Grid container spacing={2}>
                {[1, 2, 3].map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography gutterBottom>
                          {t('course')} {item}
                        </Typography>
                        <Button size="small">
                          {t('startCourse')}
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}